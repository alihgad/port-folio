"use client";
import React, { MutableRefObject, useRef, useState } from "react";
import Swal from 'sweetalert2'
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import CIcon from "@coreui/icons-react";
import { cibFacebook, cibLinkedin, cibWhatsapp } from "@coreui/icons";
import Link from "next/link";
import axios from "axios";
import Loading from "@/components/global/Loader";

const Page = () => {
 
  const [loading,setLoading]= useState(false)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      axios
       .post("https://portfolio-api-sigma-ten.vercel.app/projects/sendEmail", values)
       .then((res) => {
        Swal.fire({
          title: "Done",
          text: "Message has been sent",
          icon: "success",
          timer: 1000
        });
        })
       .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        }).finally(
          ()=>{
            formik.resetForm();
            setLoading(false);
          }
        );
    },
  });

  return (
    <>
      <div className="container py-20 ">
        <div className="  flex items-center justify-center dark:text-white">
          {loading?
           <div className="position-absolute inset-0 bg-black bg-opacity-50   ">
            <Loading/>
           </div>
            : null  }
          <form
            onSubmit={formik.handleSubmit}
            className="flex justify-center items-center flex-col w-full"
          >
            <h1 className="text-blue-400 dark:text-gray-400 font-sans">Send message</h1>
            <div className="mb-3 w-10/12 lg:w-1/2">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...formik.getFieldProps("name")}
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
                {...formik.getFieldProps("email")}
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
                {...formik.getFieldProps("phone")}
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

            <Button type="submit" > Send Messege</Button>
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
