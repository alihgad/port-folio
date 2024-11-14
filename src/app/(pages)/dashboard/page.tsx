"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Loading from "@/components/global/Loader";
import Swal from "sweetalert2";

interface project  {
    _id: number;
    image: string;
    alt: string;
    link: string;
    heading: string;
    description: string;
    date: string;
    type: string;
    git: string;
}

const Page: React.FC<{}> = () => {
  const [projects, setProjects]: [
    project[],
    Dispatch<SetStateAction<null>> | any
  ] = useState([]);
  const [isLoading, setIsLoading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(true);
  const [update, setUpdate]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const [id, setId]: [
    number | undefined,
    Dispatch<SetStateAction<number | undefined>>
  ] = useState();
  const [admin, setAdmin] = useState(false);



  async function getData(){
    await axios
      .get("https://portfolio-api-sigma-ten.vercel.app/projects")
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      }).finally(() => {
        setIsLoading(false);
        
      });
  }

  useEffect(() => {
     getData()
  }, []);


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
      alert(JSON.stringify(values));
      axios
        .post("https://portfolio-api-sigma-ten.vercel.app/projects", values)
        .then((res) => {
          console.log(res);
          alert("success" + res);
          getData();
        values.image = "",
        values.alt = "",
        values.link = "",
        values.heading = "",
        values.description = "",
        values.date = "",
        values.type = "",
        values.git = ""
          
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
      axios
        .post("https://portfolio-api-sigma-ten.vercel.app/pin", values)
        .then((res) => {
          if (res.data.role === "admin") {
            setAdmin(true);
          }else{
            Swal.fire({
              title: 'Warning!',
              text: "You are not authorized to acsses this page!",
              icon: 'warning',
              showCancelButton: false,
              confirmButtonText: 'OK',
            })
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
  });

  const deleteProject= (id:number)=>{
    axios
   .delete(`https://portfolio-api-sigma-ten.vercel.app/projects/${id}`).then((res) => {alert( `delted ${id}`  )}).catch((error) => {alert(error);;});
   setIsLoading(true)
   getData()
  }

  const editproject = (ids:number)=>{
    
    setUpdate(true)
    setId(ids)

    const project:project|undefined = projects.find((p:{_id:number}):boolean => {
      
      return p._id === ids
    })

    
    if (project){
      formik.setValues({
        link: project.link,
        image: project.image,
        alt: project.alt,
        heading: project.heading,
        description: project.description,
        date: project.date,
        type: project.type,
        git: project.git,
      })
  
    }else{
      alert("project not found")
    }


  }

  const updateProject = async (_id:number | undefined , values:any)=>{
    console.log(id);
    console.log(_id,"_id");
    
    values._id = id
    setIsLoading(true)
    await axios
      .put(`https://portfolio-api-sigma-ten.vercel.app/projects/${id}` , {
        image: values.image,
        alt: values.alt,
        link: values.link,
        heading: values.heading,
        description: values.description,
        date: values.date,
        type: values.type,
        git: values.git,
      })
      .then((response) => {
        alert("success");
        getData();
        setUpdate(false)
        values.image = "",
        values.alt = "",
        values.link = "",
        values.heading = "",
        values.description = "",
        values.date = "",
        values.type = "",
        values.git = ""
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      }).finally(() => {
        setIsLoading(false);
      });

  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {admin ? (
            <>
              <div className="container pb-10 pt-32 md:pt-24">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col  justify-center items-center dark:text-white "
                >
                  <div className="mb-3 w-10/12 ">
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

                  <div className="mb-3 w-10/12 ">
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

                  <div className="mb-3 w-10/12 ">
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

                  <div className="mb-3 w-10/12 ">
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

                  <div className="mb-3 w-10/12 ">
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

                  <div className="mb-3 w-10/12 ">
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

                  <div className="mb-3 w-10/12 ">
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

                  <div className="mb-3 w-10/12 ">
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

                  <Button type="submit" className={update ?  "hidden" : ""}>add</Button>
                  <div onClick={()=>{updateProject(id , formik.values)}} className={update ?  "bg-blue-400 rounded-lg px-3 py-2 capitalize text-white cursor-pointer" : "hidden"}  >update</div>
                </form>
              </div>

              <div className="container">
                <div className="table-responsive">
                  <table className="table table-secondary">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">title</th>
                        <th scope="col" className="text-center" >update</th>
                        <th scope="col" className="text-center" >delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects?.map((proj: { _id: number; alt: string }) => {
                        return (
                          <>
                            <tr className="">
                              <td>{proj.alt}</td>
                              <td>
                                <Button onClick={()=>{
                                  
                                  editproject(proj._id)
                                  }}>update</Button>
                              </td>
                              <td>
                                <Button onClick={()=>{deleteProject(proj._id)}}>delete</Button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-screen flex justify-center items-center container ">
                <form
                  onSubmit={pinform.handleSubmit}
                  className="flex flex-col h-screen justify-center items-center dark:text-white w-full "
                >
                  <div className="mb-3 w-1/2 ">
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
      )}
    </>
  );
};

export default Page;
 