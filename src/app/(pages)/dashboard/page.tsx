"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Page: React.FC<{}> = () => {
  const [pin, setPin] = useState(0);
  const [admin, setAdmin] = useState(false);
  const formik = useFormik({
    initialValues: {
      link: "",
      image: "",
      alt: "",
      heading: "",
      description: "",
      date: "",
      type: "",
      git: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values));
      axios
        .post("https://portfolio-api-sigma-ten.vercel.app/projects", values)
        .then((res) => {
          alert("success" + res);
        })
        .catch((err) => {
          alert(err);
        });
    },
    validationSchema: Yup.object().shape({}),
  });

  const pinform = useFormik({
    initialValues: {
      pin: "",
    },
    onSubmit: (values) => {
      axios.post("https://portfolio-api-sigma-ten.vercel.app/pin", values).then((res) => {
        alert(res.data.role);
        if (res.data.role === 'admin') {
          setAdmin(true);
        }
      }).catch((err)=>{})
    },
  });
  return (
    <>
      {admin ? (
        <>
          <div className="container pb-10 pt-32 md:pt-24">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col h-screen justify-center items-center dark:text-white "
            >
              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="link" className="form-label">
                  Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Link"
                  aria-describedby="helpId"
                  {...formik.getFieldProps("link")}
                />
                {formik.touched.link && formik.errors.link ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.link}
                  </div>
                ) : null}
              </div>

              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  aria-describedby="helpId"
                  placeholder=""
                  {...formik.getFieldProps("image")}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.image}
                  </div>
                ) : null}
              </div>

              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="alt" className="form-label">
                  Alt
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alt"
                  aria-describedby="helpId"
                  {...formik.getFieldProps("alt")}
                />
                {formik.touched.alt && formik.errors.alt ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.alt}
                  </div>
                ) : null}
              </div>

              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="heading" className="form-label">
                  Heading
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="heading"
                  aria-describedby="helpId"
                  {...formik.getFieldProps("heading")}
                />
                {formik.touched.heading && formik.errors.heading ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.heading}
                  </div>
                ) : null}
              </div>

              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  {...formik.getFieldProps("description")}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.description}
                  </div>
                ) : null}
              </div>

              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  aria-describedby="helpId"
                  {...formik.getFieldProps("date")}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.date}
                  </div>
                ) : null}
              </div>

              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  {...formik.getFieldProps("type")}
                />
                {formik.touched.type && formik.errors.type ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.type}
                  </div>
                ) : null}
              </div>

              <div className="mb-3 w-10/12 lg:w-1/2">
                <label htmlFor="git" className="form-label">
                  GitHub Repo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="git"
                  {...formik.getFieldProps("git")}
                />
                {formik.touched.git && formik.errors.git ? (
                  <div className="text-red-500 text-base font-light">
                    {formik.errors.git}
                  </div>
                ) : null}
              </div>

              <Button type="submit">add</Button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="h-screen flex justify-center items-center">
            <form
              onSubmit={pinform.handleSubmit}
              className="flex flex-col h-screen justify-center items-center dark:text-white "
            >
              <div className="mb-3 lg:w-1/2">
                <label htmlFor="pin" className="form-label">
                  pin
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pin"
                  aria-describedby="helpId"
                  {...pinform.getFieldProps("pin")}
                />
              </div>
              <Button type="submit">log in</Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
