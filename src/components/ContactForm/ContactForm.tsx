import { useState } from "react";
import { IContactFormValue } from "../../types/IContactFormValue";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { contactFormSchema } from "../../helpers";
import cn from "classnames";
import styles from "./ContactForm.module.scss";
import Metamask from "../../assets/images/icons/Metamask";
import Discord from "../../assets/images/icons/Discord";

const ContactForm: React.FC = () => {
  const [isMinted, setIsMinted] = useState(false);

  const initialValues: IContactFormValue = {
    discord: "",
    metamask: "",
  };

  const onSubmit = (
    value: IContactFormValue,
    { resetForm }: FormikHelpers<IContactFormValue>
  ) => {
    console.log("Discord: ", value.discord.toUpperCase());
    console.log("MetaMask: ", value.metamask.toUpperCase());
    setIsMinted(true);

    setTimeout(() => {
      setIsMinted(false);
      resetForm();
    }, 4000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors: { discord, metamask }, touched }) => {
        const buttonText =
          discord || metamask ? "ERROR" : isMinted ? "MINTED" : "MINT";
        return (
          <Form className={styles.form}>
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
                    [styles.error]: touched.discord && discord,
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
                    [styles.error]: touched.metamask && metamask,
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
              {buttonText}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
