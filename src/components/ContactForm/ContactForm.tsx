import { useEffect, useState } from "react";
import { IContactFormValue } from "../../types/IContactFormValue";
import { ErrorMessage, Field, Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { contactFormSchema } from "../../helpers";
import cn from "classnames";
import styles from "./ContactForm.module.scss";
import Metamask from "../../assets/images/icons/Metamask";
import Discord from "../../assets/images/icons/Discord";
import { ToastContainer, toast } from "react-toastify";

const FormObserver: React.FC = () => {
  const { values } = useFormikContext<IContactFormValue>();
  
  useEffect(() => {
    localStorage.setItem("discord", values.discord);
    localStorage.setItem("metamask", values.metamask);
  }, [values]);

  return null;
};

const ContactForm: React.FC = () => {
  const [isMinted, setIsMinted] = useState(false);

  const initialValues: IContactFormValue = {
    discord: localStorage.getItem("discord") ?? "",
    metamask: localStorage.getItem("metamask") ?? "",
  };

  const onSubmit = (
    values: IContactFormValue,
    { resetForm }: FormikHelpers<IContactFormValue>
  ) => {
    console.log("Discord: ", values.discord.toUpperCase());
    console.log("MetaMask: ", values.metamask.toUpperCase());
    
    toast.success(`Thank you, ${values.discord}! Form submitted successfully!`);
    setIsMinted(true);

    localStorage.removeItem("discord");
    localStorage.removeItem("metamask");
    
    resetForm({
      values: { discord: "", metamask: "" },
      touched: { discord: false, metamask: false }
    });
    
    setTimeout(() => setIsMinted(false), 4000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={onSubmit}
        enableReinitialize  
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <FormObserver />  
            
            <div className={styles.form__input_wrapper}>
              <div className={styles.form__icon_container}>
                <Discord className={styles.form__icon} />
              </div>

              <div className={styles.form__field}>
                <Field
                  id="discord"
                  name="discord"
                  type="text"
                  className={cn(styles.form__input, {
                    [styles.error]: touched.discord && errors.discord,
                  })}
                  autoComplete="off"
                  placeholder="@username"
                />
                <ErrorMessage
                  name="discord"
                  component="p"
                  className={styles.form__error}
                />
              </div>
            </div>

            <div className={styles.form__input_wrapper}>
              <div className={styles.form__icon_container}>
                <Metamask />
              </div>

              <div className={styles.form__field}>
                <Field
                  id="metamask"
                  name="metamask"
                  type="text"
                  className={cn(styles.form__input, {
                    [styles.error]: touched.metamask && errors.metamask,
                  })}
                  autoComplete="off"
                  placeholder="Wallet address"
                />
                <ErrorMessage
                  name="metamask"
                  component="p"
                  className={styles.form__error}
                />
              </div>
            </div>

            <button
              type="submit"
              aria-label="Submit MINT form"
              className={styles.form__submit}
            >
              {errors.discord || errors.metamask 
                ? "ERROR" 
                : isMinted 
                ? "MINTED" 
                : "MINT"}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactForm;