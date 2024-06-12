"use client";
import React, { MutableRefObject, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import CIcon from "@coreui/icons-react";
import { cibFacebook, cibLinkedin, cibWhatsapp } from "@coreui/icons";
import Link from "next/link";

const Page = () => {
  const form: any = useRef();
  

  const sendEmail = (e: any) => {

    e.preventDefault();

    emailjs
      .sendForm("service_ali", "template_ali", form.current, {
        publicKey: "VdP3etScr6dqyrzOP",
      })
      .then(
        () => {
          alert("meesage sent");
        },
        (error) => {
          alert("FAILED..." + error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      from_email: "",
      from_phone: "",
      message: "",
      from_name: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <>
      <div className="container py-20">
        <div className="  flex items-center justify-center dark:text-white">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex justify-center items-center flex-col w-full"
          >
            <h1 className="text-blue-400 font-sans">Send message</h1>
            <div className="mb-3 w-10/12 lg:w-1/2">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...formik.getFieldProps("from_name")}
              />
            </div>

            <div className="mb-3 w-10/12 lg:w-1/2">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...formik.getFieldProps("from_email")}
              />
            </div>

            <div className="mb-3 w-10/12 lg:w-1/2">
              <label htmlFor="phone" className="form-label">
                phone
              </label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                {...formik.getFieldProps("from_phone")}
              />
            </div>

            <div className="mb-3 w-10/12 lg:w-1/2">
              <label htmlFor="message" className="form-label">
                message
              </label>
              <textarea
                rows={5}
                className="form-control"
                id="message"
                {...formik.getFieldProps("message")}
              />
            </div>

            <Button type="submit"> Send Messege</Button>
          </form>
        </div>
        <div className="social flex gap-5 justify-center mt-4  ">
          <Link
            target="_blank"
            href={"https://wa.me/+201127344298"}
            className="text-green-400"
          >
            <CIcon icon={cibWhatsapp} size="xxl" />
          </Link>

          <Link
            target="_blank"
            href={"https://www.facebook.com/3LI7ASSAN1/"}
            className="text-blue-700"
          >
            <CIcon icon={cibFacebook} size="xxl" />
          </Link>

          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/ali-hassan-gad/"}
            className="text-blue-900"
          >
            <CIcon icon={cibLinkedin} size="xxl" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
