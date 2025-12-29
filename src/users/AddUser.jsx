import React, { use } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router";
import style from "../style.module.css";

const AddUser = () => {
  const { UserId } = useParams();
  const {state}=useLocation();
  console.log(state.x, state.y);
  const navigate = useNavigate();
  //   یوز پارامز یک ابجکت با استفاده از پارامتر هایی که برای صفحه ارسال شده برای ما بر میگردونه

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
      <h4 className="text-center text-primary">
        {UserId ? "ویرایش کاربر" : "افزودن کاربر"}
      </h4>
      <div className="row justify-content-center mt-5 ">
        <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              نام و نام خانوادگی
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              نام کاربری
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              ایمیل
            </label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3 row">
            <label htmlFor="exampleInputEmail1" className="form-label">
              آدرس
            </label>
            <div className="col-6 my-1">
              <input type="text" className="form-control" placeholder="شهر" />
            </div>
            <div className="col-6 my-1">
              <input type="text" class="form-control" placeholder="خیابان" />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                class="form-control"
                placeholder="ادامه آدرس"
              />
            </div>
            <div className="col-6 my-1">
              <input type="text" className="form-control" placeholder="کد پستی" />
            </div>
          </div>

          <div className="col-12 text-start">
            <button type="button" className="btn btn-danger ms-2"onClick={()=>{navigate(-1)}} >
              بازگشت
            </button>
            <button type="submit" className="btn btn-primary">
              {UserId ? "ویرایش " : "افزودن "}
            </button>
          </div>
        </form>
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default AddUser;
