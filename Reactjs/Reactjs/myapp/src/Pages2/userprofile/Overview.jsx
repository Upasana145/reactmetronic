import {React,useState} from "react";
import SidePanel from "../SidePanel";
import Header from "../Header";
import Footer from "../Footer";


function Biddingcontent()
{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

return (
<>
  <div className="d-flex flex-column flex-root">
    {/*begin::Page*/}
    <div className="page d-flex flex-row flex-column-fluid">
      {/*begin::Aside*/}
     
{/* //********************************************************************88888888 */}
      <SidePanel  isOpen = {isOpen}   toggle = {toggle}/>

{/* //********************************************************************88888888 */ }

      {/*end::Aside*/}
      {/*begin::Wrapper*/}
      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        {/*begin::Header*/}
        
{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

<Header/>

{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}




        {/*end::Header*/}


        {/*begin::Content*/}



   
{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
        


<>
  {/*begin::Content*/}
  <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
    {/*begin::Toolbar*/}
    <div className="toolbar" id="kt_toolbar">
      {/*begin::Container*/}
      <div
        id="kt_toolbar_container"
        className="container-fluid d-flex flex-stack"
      >
        {/*begin::Page title*/}
        <div
          data-kt-swapper="true"
          data-kt-swapper-mode="prepend"
          data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
          className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
        >
          {/*begin::Title*/}
          <h1 className="d-flex text-dark fw-bolder fs-3 align-items-center my-1">
            Overview
          </h1>
          {/*end::Title*/}
          {/*begin::Separator*/}
          <span className="h-20px border-gray-300 border-start mx-4" />
          {/*end::Separator*/}
          {/*begin::Breadcrumb*/}
          <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
            {/*begin::Item*/}
            <li className="breadcrumb-item text-muted">
              <a
                href="../../demo1/dist/index.html"
                className="text-muted text-hover-primary"
              >
                Home
              </a>
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-300 w-5px h-2px" />
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item text-muted">Pages</li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-300 w-5px h-2px" />
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item text-muted">User Profile</li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-300 w-5px h-2px" />
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item text-dark">Overview</li>
            {/*end::Item*/}
          </ul>
          {/*end::Breadcrumb*/}
        </div>
        {/*end::Page title*/}
        {/*begin::Actions*/}
        <div className="d-flex align-items-center gap-2 gap-lg-3">
          {/*begin::Filter menu*/}
          <div className="m-0">
            {/*begin::Menu toggle*/}
            <a
              href="#"
              className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
              <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}Filter
            </a>
            {/*end::Menu toggle*/}
            {/*begin::Menu 1*/}
            <div
              className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
              data-kt-menu="true"
              id="kt_menu_6244457f3691d"
            >
              {/*begin::Header*/}
              <div className="px-7 py-5">
                <div className="fs-5 text-dark fw-bolder">Filter Options</div>
              </div>
              {/*end::Header*/}
              {/*begin::Menu separator*/}
              <div className="separator border-gray-200" />
              {/*end::Menu separator*/}
              {/*begin::Form*/}
              <div className="px-7 py-5">
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-bold">Status:</label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <div>
                    <select
                      className="form-select form-select-solid"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-dropdown-parent="#kt_menu_6244457f3691d"
                      data-allow-clear="true"
                    >
                      <option />
                      <option value={1}>Approved</option>
                      <option value={2}>Pending</option>
                      <option value={2}>In Process</option>
                      <option value={2}>Rejected</option>
                    </select>
                  </div>
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-bold">Member Type:</label>
                  {/*end::Label*/}
                  {/*begin::Options*/}
                  <div className="d-flex">
                    {/*begin::Options*/}
                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                      />
                      <span className="form-check-label">Author</span>
                    </label>
                    {/*end::Options*/}
                    {/*begin::Options*/}
                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={2}
                        defaultChecked="checked"
                      />
                      <span className="form-check-label">Customer</span>
                    </label>
                    {/*end::Options*/}
                  </div>
                  {/*end::Options*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-bold">Notifications:</label>
                  {/*end::Label*/}
                  {/*begin::Switch*/}
                  <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      name="notifications"
                      defaultChecked="checked"
                    />
                    <label className="form-check-label">Enabled</label>
                  </div>
                  {/*end::Switch*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Actions*/}
                <div className="d-flex justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-sm btn-light btn-active-light-primary me-2"
                    data-kt-menu-dismiss="true"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary"
                    data-kt-menu-dismiss="true"
                  >
                    Apply
                  </button>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Form*/}
            </div>
            {/*end::Menu 1*/}
          </div>
          {/*end::Filter menu*/}
          {/*begin::Secondary button*/}
          {/*end::Secondary button*/}
          {/*begin::Primary button*/}
          <a
            href="../../demo1/dist/.html"
            className="btn btn-sm btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_create_app"
          >
            Create
          </a>
          {/*end::Primary button*/}
        </div>
        {/*end::Actions*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::Toolbar*/}
    {/*begin::Post*/}
    <div className="post d-flex flex-column-fluid" id="kt_post">
      {/*begin::Container*/}
      <div id="kt_content_container" className="container-xxl">
        {/*begin::Navbar*/}
        <div className="card mb-5 mb-xxl-8">
          <div className="card-body pt-9 pb-0">
            {/*begin::Details*/}
            <div className="d-flex flex-wrap flex-sm-nowrap">
              {/*begin: Pic*/}
              <div className="me-7 mb-4">
                <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                  <img src="assets/media/avatars/300-1.jpg" alt="image" />
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px" />
                </div>
              </div>
              {/*end::Pic*/}
              {/*begin::Info*/}
              <div className="flex-grow-1">
                {/*begin::Title*/}
                <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                  {/*begin::User*/}
                  <div className="d-flex flex-column">
                    {/*begin::Name*/}
                    <div className="d-flex align-items-center mb-2">
                      <a
                        href="#"
                        className="text-gray-900 text-hover-primary fs-2 fw-bolder me-1"
                      >
                        Max Smith
                      </a>
                      <a href="#">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen026.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
                              fill="#00A3FF"
                            />
                            <path
                              className="permanent"
                              d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </a>
                    </div>
                    {/*end::Name*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                      <a
                        href="#"
                        className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                        <span className="svg-icon svg-icon-4 me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                              fill="currentColor"
                            />
                            <path
                              d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}Developer
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                        <span className="svg-icon svg-icon-4 me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                              fill="currentColor"
                            />
                            <path
                              d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}SF, Bay Area
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                        <span className="svg-icon svg-icon-4 me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                              fill="currentColor"
                            />
                            <path
                              d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}max@kt.com
                      </a>
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Actions*/}
                  <div className="d-flex my-4">
                    <a
                      href="#"
                      className="btn btn-sm btn-light me-2"
                      id="kt_user_follow_button"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                      <span className="svg-icon svg-icon-3 d-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                            fill="currentColor"
                          />
                          <path
                            d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      {/*begin::Indicator*/}
                      <span className="indicator-label">Follow</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                      {/*end::Indicator*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_offer_a_deal"
                    >
                      Hire Me
                    </a>
                    {/*begin::Menu*/}
                    <div className="me-0">
                      <button
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="bi bi-three-dots fs-3" />
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="Specify a target name for future usage and reference"
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Title*/}
                {/*begin::Stats*/}
                <div className="d-flex flex-wrap flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column flex-grow-1 pe-8">
                    {/*begin::Stats*/}
                    <div className="d-flex flex-wrap">
                      {/*begin::Stat*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        {/*begin::Number*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                          <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x={13}
                                y={6}
                                width={13}
                                height={2}
                                rx={1}
                                transform="rotate(90 13 6)"
                                fill="currentColor"
                              />
                              <path
                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          <div
                            className="fs-2 fw-bolder"
                            data-kt-countup="true"
                            data-kt-countup-value={4500}
                            data-kt-countup-prefix="$"
                          >
                            0
                          </div>
                        </div>
                        {/*end::Number*/}
                        {/*begin::Label*/}
                        <div className="fw-bold fs-6 text-gray-400">
                          Earnings
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        {/*begin::Number*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                          <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x={11}
                                y={18}
                                width={13}
                                height={2}
                                rx={1}
                                transform="rotate(-90 11 18)"
                                fill="currentColor"
                              />
                              <path
                                d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          <div
                            className="fs-2 fw-bolder"
                            data-kt-countup="true"
                            data-kt-countup-value={80}
                          >
                            0
                          </div>
                        </div>
                        {/*end::Number*/}
                        {/*begin::Label*/}
                        <div className="fw-bold fs-6 text-gray-400">
                          Projects
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        {/*begin::Number*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                          <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x={13}
                                y={6}
                                width={13}
                                height={2}
                                rx={1}
                                transform="rotate(90 13 6)"
                                fill="currentColor"
                              />
                              <path
                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          <div
                            className="fs-2 fw-bolder"
                            data-kt-countup="true"
                            data-kt-countup-value={60}
                            data-kt-countup-prefix="%"
                          >
                            0
                          </div>
                        </div>
                        {/*end::Number*/}
                        {/*begin::Label*/}
                        <div className="fw-bold fs-6 text-gray-400">
                          Success Rate
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Progress*/}
                  <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                    <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                      <span className="fw-bold fs-6 text-gray-400">
                        Profile Compleation
                      </span>
                      <span className="fw-bolder fs-6">50%</span>
                    </div>
                    <div className="h-5px mx-3 w-100 bg-light mb-3">
                      <div
                        className="bg-success rounded h-5px"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  {/*end::Progress*/}
                </div>
                {/*end::Stats*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Details*/}
            {/*begin::Navs*/}
            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
              {/*begin::Nav item*/}
              <li className="nav-item mt-2">
                <a
                  className="nav-link text-active-primary ms-0 me-10 py-5 active"
                  href="../../demo1/dist/pages/user-profile/overview.html"
                >
                  Overview
                </a>
              </li>
              {/*end::Nav item*/}
              {/*begin::Nav item*/}
              <li className="nav-item mt-2">
                <a
                  className="nav-link text-active-primary ms-0 me-10 py-5"
                  href="../../demo1/dist/pages/user-profile/projects.html"
                >
                  Projects
                </a>
              </li>
              {/*end::Nav item*/}
              {/*begin::Nav item*/}
              <li className="nav-item mt-2">
                <a
                  className="nav-link text-active-primary ms-0 me-10 py-5"
                  href="../../demo1/dist/pages/user-profile/campaigns.html"
                >
                  Campaigns
                </a>
              </li>
              {/*end::Nav item*/}
              {/*begin::Nav item*/}
              <li className="nav-item mt-2">
                <a
                  className="nav-link text-active-primary ms-0 me-10 py-5"
                  href="../../demo1/dist/pages/user-profile/documents.html"
                >
                  Documents
                </a>
              </li>
              {/*end::Nav item*/}
              {/*begin::Nav item*/}
              <li className="nav-item mt-2">
                <a
                  className="nav-link text-active-primary ms-0 me-10 py-5"
                  href="../../demo1/dist/pages/user-profile/followers.html"
                >
                  Followers
                </a>
              </li>
              {/*end::Nav item*/}
              {/*begin::Nav item*/}
              <li className="nav-item mt-2">
                <a
                  className="nav-link text-active-primary ms-0 me-10 py-5"
                  href="../../demo1/dist/pages/user-profile/activity.html"
                >
                  Activity
                </a>
              </li>
              {/*end::Nav item*/}
            </ul>
            {/*begin::Navs*/}
          </div>
        </div>
        {/*end::Navbar*/}
        {/*begin::Row*/}
        <div className="row g-5 g-xxl-8">
          {/*begin::Col*/}
          <div className="col-xl-6">
            {/*begin::Feeds Widget 1*/}
            <div className="card mb-5 mb-xxl-8">
              {/*begin::Body*/}
              <div className="card-body pb-0">
                {/*begin::Header*/}
                <div className="d-flex align-items-center">
                  {/*begin::User*/}
                  <div className="d-flex align-items-center flex-grow-1">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-45px me-5">
                      <img src="assets/media/avatars/300-6.jpg" alt="" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                      >
                        Grace Green
                      </a>
                      <span className="text-gray-400 fw-bold">
                        PHP, SQLite, Artisan CLI
                      </span>
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Menu*/}
                  <div className="my-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                          Quick Actions
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Ticket
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Customer
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">New Group</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Admin Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Staff Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Member Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Contact
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate Reports
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Header*/}
                {/*begin::Form*/}
                <form
                  id="kt_forms_widget_1_form"
                  className="ql-quil ql-quil-plain pb-3"
                >
                  {/*begin::Editor*/}
                  <div id="kt_forms_widget_1_editor" className="py-6" />
                  {/*end::Editor*/}
                  <div className="separator" />
                  {/*begin::Toolbar*/}
                  <div
                    id="kt_forms_widget_1_editor_toolbar"
                    className="ql-toolbar d-flex flex-stack py-2"
                  >
                    <div className="me-2">
                      <span className="ql-formats ql-size ms-0">
                        <select className="ql-size w-75px" />
                      </span>
                      <span className="ql-formats">
                        <button className="ql-bold" />
                        <button className="ql-italic" />
                        <button className="ql-underline" />
                        <button className="ql-strike" />
                        <button className="ql-image" />
                        <button className="ql-link" />
                        <button className="ql-clean" />
                      </span>
                    </div>
                    <div className="me-n3">
                      <span className="btn btn-icon btn-sm btn-active-color-primary">
                        <i className="flaticon2-clip-symbol icon-ms" />
                      </span>
                      <span className="btn btn-icon btn-sm btn-active-color-primary">
                        <i className="flaticon2-pin icon-ms" />
                      </span>
                    </div>
                  </div>
                  {/*end::Toolbar*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Feeds Widget 1*/}
            {/*begin::Feeds Widget 2*/}
            <div className="card mb-5 mb-xxl-8">
              {/*begin::Body*/}
              <div className="card-body pb-0">
                {/*begin::Header*/}
                <div className="d-flex align-items-center mb-5">
                  {/*begin::User*/}
                  <div className="d-flex align-items-center flex-grow-1">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-45px me-5">
                      <img src="assets/media/avatars/300-23.jpg" alt="" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                      >
                        Nick Logan
                      </a>
                      <span className="text-gray-400 fw-bold">
                        PHP, SQLite, Artisan CLI
                      </span>
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Menu*/}
                  <div className="my-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                          Quick Actions
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Ticket
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Customer
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">New Group</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Admin Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Staff Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Member Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Contact
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate Reports
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Header*/}
                {/*begin::Post*/}
                <div className="mb-5">
                  {/*begin::Text*/}
                  <p className="text-gray-800 fw-normal mb-5">
                    Outlines keep you honest. They stop you from indulging in
                    poorly thought-out metaphors about driving and keep you
                    focused on the overall structure of your post
                  </p>
                  {/*end::Text*/}
                  {/*begin::Toolbar*/}
                  <div className="d-flex align-items-center mb-5">
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                      <span className="svg-icon svg-icon-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={12}
                            width={7}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={7}
                            width={12}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}120
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}15
                    </a>
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Post*/}
                {/*begin::Separator*/}
                <div className="separator mb-4" />
                {/*end::Separator*/}
                {/*begin::Reply input*/}
                <form className="position-relative mb-6">
                  <textarea
                    className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                    data-kt-autosize="true"
                    rows={1}
                    placeholder="Reply.."
                    defaultValue={""}
                  />
                  <div className="position-absolute top-0 end-0 me-n5">
                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                      <span className="svg-icon svg-icon-3 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                      <span className="svg-icon svg-icon-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </form>
                {/*edit::Reply input*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Feeds Widget 2*/}
            {/*begin::Feeds Widget 3*/}
            <div className="card mb-5 mb-xxl-8">
              {/*begin::Body*/}
              <div className="card-body pb-0">
                {/*begin::Header*/}
                <div className="d-flex align-items-center mb-3">
                  {/*begin::User*/}
                  <div className="d-flex align-items-center flex-grow-1">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-45px me-5">
                      <img src="assets/media/avatars/300-21.jpg" alt="" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                      >
                        Carles Nilson
                      </a>
                      <span className="text-gray-400 fw-bold">
                        Yestarday at 5:06 PM
                      </span>
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Menu*/}
                  <div className="my-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                          Quick Actions
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Ticket
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Customer
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">New Group</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Admin Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Staff Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Member Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Contact
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate Reports
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Header*/}
                {/*begin::Post*/}
                <div className="mb-7">
                  {/*begin::Text*/}
                  <div className="text-gray-800 mb-5">
                    Outlines keep you honest. They stop you from indulging in
                    poorly thought-out metaphors about driving and keep you
                    focused on the overall structure of your post
                  </div>
                  {/*end::Text*/}
                  {/*begin::Toolbar*/}
                  <div className="d-flex align-items-center mb-5">
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                      <span className="svg-icon svg-icon-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={12}
                            width={7}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={7}
                            width={12}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}12
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}150
                    </a>
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Post*/}
                {/*begin::Replies*/}
                <div className="mb-7 ps-10">
                  {/*begin::Reply*/}
                  <div className="d-flex mb-5">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-45px me-5">
                      <img src="assets/media/avatars/300-14.jpg" alt="" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-column flex-row-fluid">
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center flex-wrap mb-1">
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-bolder me-2"
                        >
                          Alice Danchik
                        </a>
                        <span className="text-gray-400 fw-bold fs-7">
                          1 day
                        </span>
                        <a
                          href="#"
                          className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
                        >
                          Reply
                        </a>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Post*/}
                      <span className="text-gray-800 fs-7 fw-normal pt-1">
                        Long before you sit dow to put digital pen to paper you
                        need to make sure you have to sit down and write.
                      </span>
                      {/*end::Post*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Reply*/}
                  {/*begin::Reply*/}
                  <div className="d-flex">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-45px me-5">
                      <img src="assets/media/avatars/300-9.jpg" alt="" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-column flex-row-fluid">
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center flex-wrap mb-1">
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-bolder me-2"
                        >
                          Harris Bold
                        </a>
                        <span className="text-gray-400 fw-bold fs-7">
                          2 days
                        </span>
                        <a
                          href="#"
                          className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
                        >
                          Reply
                        </a>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Post*/}
                      <span className="text-gray-800 fs-7 fw-normal pt-1">
                        Outlines keep you honest. They stop you from indulging
                        in poorly
                      </span>
                      {/*end::Post*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Reply*/}
                </div>
                {/*end::Replies*/}
                {/*begin::Separator*/}
                <div className="separator mb-4" />
                {/*end::Separator*/}
                {/*begin::Reply input*/}
                <form className="position-relative mb-6">
                  <textarea
                    className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                    data-kt-autosize="true"
                    rows={1}
                    placeholder="Reply.."
                    defaultValue={""}
                  />
                  <div className="position-absolute top-0 end-0 me-n5">
                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                      <span className="svg-icon svg-icon-3 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                      <span className="svg-icon svg-icon-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </form>
                {/*edit::Reply input*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Feeds Widget 3*/}
            {/*begin::Feeds Widget 4*/}
            <div className="card mb-5 mb-xxl-8">
              {/*begin::Body*/}
              <div className="card-body pb-0">
                {/*begin::Header*/}
                <div className="d-flex align-items-center mb-5">
                  {/*begin::User*/}
                  <div className="d-flex align-items-center flex-grow-1">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-45px me-5">
                      <img src="assets/media/avatars/300-7.jpg" alt="" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-gray-900 text-hover-primary fs-6 fw-bolder"
                      >
                        Carles Nilson
                      </a>
                      <span className="text-gray-400 fw-bold">
                        Last week at 10:00 PM
                      </span>
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Menu*/}
                  <div className="my-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 3*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                      data-kt-menu="true"
                    >
                      {/*begin::Heading*/}
                      <div className="menu-item px-3">
                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                          Payments
                        </div>
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Create Invoice
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link flex-stack px-3">
                          Create Payment
                          <i
                            className="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify a target name for future usage and reference"
                          />
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Generate Bill
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-end"
                      >
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">Subscription</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Plans
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Billing
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Statements
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu separator*/}
                          <div className="separator my-2" />
                          {/*end::Menu separator*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <div className="menu-content px-3">
                              {/*begin::Switch*/}
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input
                                  className="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                  name="notifications"
                                />
                                {/*end::Input*/}
                                {/*end::Label*/}
                                <span className="form-check-label text-muted fs-6">
                                  Recuring
                                </span>
                                {/*end::Label*/}
                              </label>
                              {/*end::Switch*/}
                            </div>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3 my-1">
                        <a href="#" className="menu-link px-3">
                          Settings
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 3*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Header*/}
                {/*begin::Post*/}
                <div className="mb-7">
                  {/*begin::Text*/}
                  <div className="text-gray-800 mb-5">
                    Outlines keep you honest. They stop you from indulging in
                    poorly thought-out metaphors about driving and keep you
                    focused on the overall structure of your post
                  </div>
                  {/*end::Text*/}
                  {/*begin::Toolbar*/}
                  <div className="d-flex align-items-center mb-5">
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                      <span className="svg-icon svg-icon-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={12}
                            width={7}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={7}
                            width={12}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}22
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}59
                    </a>
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Post*/}
                {/*begin::Separator*/}
                <div className="separator mb-4" />
                {/*end::Separator*/}
                {/*begin::Reply input*/}
                <form className="position-relative mb-6">
                  <textarea
                    className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                    data-kt-autosize="true"
                    rows={1}
                    placeholder="Reply.."
                    defaultValue={""}
                  />
                  <div className="position-absolute top-0 end-0 me-n5">
                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                      <span className="svg-icon svg-icon-3 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                      <span className="svg-icon svg-icon-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </form>
                {/*edit::Reply input*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Feeds Widget 4*/}
            {/*begin::Feeds widget 5*/}
            <div className="card d-none" id="kt_widget_5">
              {/*begin::Body*/}
              <div className="card-body pb-0">
                {/*begin::Header*/}
                <div className="d-flex align-items-center mb-5">
                  {/*begin::User*/}
                  <div className="d-flex align-items-center flex-grow-1">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-45px me-5">
                      <img src="assets/media/avatars/300-7.jpg" alt="" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-gray-800 text-hover-primary fs-6 fw-bolder"
                      >
                        Carles Nilson
                      </a>
                      <span className="text-gray-400 fw-bold">
                        Last week at 10:00 PM
                      </span>
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Menu*/}
                  <div className="my-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                          Quick Actions
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Ticket
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Customer
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">New Group</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Admin Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Staff Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Member Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          New Contact
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate Reports
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Header*/}
                {/*begin::Post*/}
                <div className="mb-7">
                  {/*begin::Image*/}
                  <div
                    className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5"
                    style={{
                      backgroundImage:
                        'url("assets/media/stock/900x600/19.jpg")'
                    }}
                  />
                  {/*end::Image*/}
                  {/*begin::Text*/}
                  <div className="text-gray-800 mb-5">
                    Outlines keep you honest. They stop you from indulging in
                    poorly thought-out metaphors about driving and keep you
                    focused on the overall structure of your post
                  </div>
                  {/*end::Text*/}
                  {/*begin::Toolbar*/}
                  <div className="d-flex align-items-center mb-5">
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                      <span className="svg-icon svg-icon-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={12}
                            width={7}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                          <rect
                            x={6}
                            y={7}
                            width={12}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}20
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}50
                    </a>
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Post*/}
                {/*begin::Separator*/}
                <div className="separator mb-4" />
                {/*end::Separator*/}
                {/*begin::Reply input*/}
                <form className="position-relative mb-6">
                  <textarea
                    className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
                    data-kt-autosize="true"
                    rows={1}
                    placeholder="Reply.."
                    defaultValue={""}
                  />
                  <div className="position-absolute top-0 end-0 me-n5">
                    <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                      <span className="svg-icon svg-icon-3 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                      <span className="svg-icon svg-icon-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </form>
                {/*edit::Reply input*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Feeds widget 5*/}
            {/*begin::Feeds widget 4, 5 load more*/}
            <button
              className="btn btn-primary w-100 text-center"
              id="kt_widget_5_load_more_btn"
            >
              <span className="indicator-label">More Feeds</span>
              <span className="indicator-progress">
                Loading...
                <span className="spinner-border spinner-border-sm align-middle ms-2" />
              </span>
            </button>
            {/*end::Feeds widget 4, 5 load more*/}
          </div>
          {/*end::Col*/}
          {/*begin::Col*/}
          <div className="col-xl-6">
            {/*begin::Charts Widget 1*/}
            <div className="card mb-5 mb-xxl-8">
              {/*begin::Header*/}
              <div className="card-header border-0 pt-5">
                {/*begin::Title*/}
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bolder fs-3 mb-1">
                    Recent Statistics
                  </span>
                  <span className="text-muted fw-bold fs-7">
                    More than 400 new members
                  </span>
                </h3>
                {/*end::Title*/}
                {/*begin::Toolbar*/}
                <div className="card-toolbar">
                  {/*begin::Menu*/}
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect
                            x={5}
                            y={5}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                          />
                          <rect
                            x={14}
                            y={5}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <rect
                            x={5}
                            y={14}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <rect
                            x={14}
                            y={14}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </button>
                  {/*begin::Menu 1*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                    data-kt-menu="true"
                    id="kt_menu_6244457f3c66c"
                  >
                    {/*begin::Header*/}
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bolder">
                        Filter Options
                      </div>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Menu separator*/}
                    <div className="separator border-gray-200" />
                    {/*end::Menu separator*/}
                    {/*begin::Form*/}
                    <div className="px-7 py-5">
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-bold">Status:</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <div>
                          <select
                            className="form-select form-select-solid"
                            data-kt-select2="true"
                            data-placeholder="Select option"
                            data-dropdown-parent="#kt_menu_6244457f3c66c"
                            data-allow-clear="true"
                          >
                            <option />
                            <option value={1}>Approved</option>
                            <option value={2}>Pending</option>
                            <option value={2}>In Process</option>
                            <option value={2}>Rejected</option>
                          </select>
                        </div>
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-bold">
                          Member Type:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Options*/}
                        <div className="d-flex">
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                            />
                            <span className="form-check-label">Author</span>
                          </label>
                          {/*end::Options*/}
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={2}
                              defaultChecked="checked"
                            />
                            <span className="form-check-label">Customer</span>
                          </label>
                          {/*end::Options*/}
                        </div>
                        {/*end::Options*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-bold">
                          Notifications:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Switch*/}
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            name="notifications"
                            defaultChecked="checked"
                          />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        {/*end::Switch*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Actions*/}
                      <div className="d-flex justify-content-end">
                        <button
                          type="reset"
                          className="btn btn-sm btn-light btn-active-light-primary me-2"
                          data-kt-menu-dismiss="true"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                          data-kt-menu-dismiss="true"
                        >
                          Apply
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Form*/}
                  </div>
                  {/*end::Menu 1*/}
                  {/*end::Menu*/}
                </div>
                {/*end::Toolbar*/}
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}
              <div className="card-body">
                {/*begin::Chart*/}
                <div id="kt_charts_widget_1_chart" style={{ height: 350 }} />
                {/*end::Chart*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Charts Widget 1*/}
            {/*begin::List Widget 5*/}
            <div className="card mb-5 mb-xxl-8">
              {/*begin::Header*/}
              <div className="card-header align-items-center border-0 mt-4">
                <h3 className="card-title align-items-start flex-column">
                  <span className="fw-bolder mb-2 text-dark">Activities</span>
                  <span className="text-muted fw-bold fs-7">890,344 Sales</span>
                </h3>
                <div className="card-toolbar">
                  {/*begin::Menu*/}
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect
                            x={5}
                            y={5}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                          />
                          <rect
                            x={14}
                            y={5}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <rect
                            x={5}
                            y={14}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <rect
                            x={14}
                            y={14}
                            width={5}
                            height={5}
                            rx={1}
                            fill="currentColor"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </button>
                  {/*begin::Menu 1*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                    data-kt-menu="true"
                    id="kt_menu_6244457f3cf16"
                  >
                    {/*begin::Header*/}
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bolder">
                        Filter Options
                      </div>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Menu separator*/}
                    <div className="separator border-gray-200" />
                    {/*end::Menu separator*/}
                    {/*begin::Form*/}
                    <div className="px-7 py-5">
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-bold">Status:</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <div>
                          <select
                            className="form-select form-select-solid"
                            data-kt-select2="true"
                            data-placeholder="Select option"
                            data-dropdown-parent="#kt_menu_6244457f3cf16"
                            data-allow-clear="true"
                          >
                            <option />
                            <option value={1}>Approved</option>
                            <option value={2}>Pending</option>
                            <option value={2}>In Process</option>
                            <option value={2}>Rejected</option>
                          </select>
                        </div>
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-bold">
                          Member Type:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Options*/}
                        <div className="d-flex">
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                            />
                            <span className="form-check-label">Author</span>
                          </label>
                          {/*end::Options*/}
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={2}
                              defaultChecked="checked"
                            />
                            <span className="form-check-label">Customer</span>
                          </label>
                          {/*end::Options*/}
                        </div>
                        {/*end::Options*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-bold">
                          Notifications:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Switch*/}
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            name="notifications"
                            defaultChecked="checked"
                          />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        {/*end::Switch*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Actions*/}
                      <div className="d-flex justify-content-end">
                        <button
                          type="reset"
                          className="btn btn-sm btn-light btn-active-light-primary me-2"
                          data-kt-menu-dismiss="true"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                          data-kt-menu-dismiss="true"
                        >
                          Apply
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Form*/}
                  </div>
                  {/*end::Menu 1*/}
                  {/*end::Menu*/}
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}
              <div className="card-body pt-5">
                {/*begin::Timeline*/}
                <div className="timeline-label">
                  {/*begin::Item*/}
                  <div className="timeline-item">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      08:42
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-warning fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Text*/}
                    <div className="fw-mormal timeline-content text-muted ps-3">
                      Outlines keep you honest. And keep structure
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="timeline-item">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      10:00
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-success fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Content*/}
                    <div className="timeline-content d-flex">
                      <span className="fw-bolder text-gray-800 ps-3">
                        AEOL meeting
                      </span>
                    </div>
                    {/*end::Content*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="timeline-item">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      14:37
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-danger fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Desc*/}
                    <div className="timeline-content fw-bolder text-gray-800 ps-3">
                      Make deposit
                      <a href="#" className="text-primary">
                        USD 700
                      </a>
                      . to ESL
                    </div>
                    {/*end::Desc*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="timeline-item">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      16:50
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-primary fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Text*/}
                    <div className="timeline-content fw-mormal text-muted ps-3">
                      Indulging in poorly driving and keep structure keep great
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="timeline-item">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      21:03
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-danger fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Desc*/}
                    <div className="timeline-content fw-bold text-gray-800 ps-3">
                      New order placed
                      <a href="#" className="text-primary">
                        #XF-2356
                      </a>
                      .
                    </div>
                    {/*end::Desc*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="timeline-item">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      16:50
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-primary fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Text*/}
                    <div className="timeline-content fw-mormal text-muted ps-3">
                      Indulging in poorly driving and keep structure keep great
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="timeline-item">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      21:03
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-danger fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Desc*/}
                    <div className="timeline-content fw-bold text-gray-800 ps-3">
                      New order placed
                      <a href="#" className="text-primary">
                        #XF-2356
                      </a>
                      .
                    </div>
                    {/*end::Desc*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="timeline-item mb-9">
                    {/*begin::Label*/}
                    <div className="timeline-label fw-bolder text-gray-800 fs-6">
                      10:30
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i className="fa fa-genderless text-success fs-1" />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Text*/}
                    <div className="timeline-content fw-mormal text-muted ps-3">
                      Finance KPI Mobile app launch preparion meeting
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Item*/}
                </div>
                {/*end::Timeline*/}
              </div>
              {/*end: Card Body*/}
            </div>
            {/*end: List Widget 5*/}
          </div>
          {/*end::Col*/}
        </div>
        {/*end::Row*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::Post*/}
  </div>
  {/*end::Content*/}
</>





        
{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}



        {/*end::Content*/}
        {/*begin::Footer*/}

{/* /************************************************************ */}

<Footer/>

{/* /************************************************************ */}




        {/*end::Footer*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>

  {/*end::Root*/}
  {/*begin::Drawers*/}
  {/*begin::Activities drawer*/}
  <div
    id="kt_activities"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="activities"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_activities_toggle"
    data-kt-drawer-close="#kt_activities_close"
  >
    <div className="card shadow-none rounded-0">
      {/*begin::Header*/}
      <div className="card-header" id="kt_activities_header">
        <h3 className="card-title fw-bolder text-dark">Activity Logs</h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_activities_close"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body position-relative" id="kt_activities_body">
        {/*begin::Content*/}
        <div
          style={{position:'relative', top:'55px'}}
          id="kt_activities_scroll"
          className="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_activities_body"
          data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Timeline items*/}
          <div className="timeline">
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com003.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.3"
                        d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-bold mb-2">
                    There are 2 new tasks for you in “AirPlus Mobile App”
                    project:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Added at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Nina Nilson"
                    >
                      <img src="assets/media/avatars/300-14.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  {/*begin::Record*/}
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/projects/project.html"
                      className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                    >
                      Meeting with customer
                    </a>
                    {/*end::Title*/}
                    {/*begin::Label*/}
                    <div className="min-w-175px pe-2">
                      <span className="badge badge-light text-muted">
                        Application Design
                      </span>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img src="assets/media/avatars/300-2.jpg" alt="img" />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img src="assets/media/avatars/300-14.jpg" alt="img" />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">
                          A
                        </div>
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::Users*/}
                    {/*begin::Progress*/}
                    <div className="min-w-125px pe-2">
                      <span className="badge badge-light-primary">
                        In Progress
                      </span>
                    </div>
                    {/*end::Progress*/}
                    {/*begin::Action*/}
                    <a
                      href="../../demo1/dist/apps/projects/project.html"
                      className="btn btn-sm btn-light btn-active-light-primary"
                    >
                      View
                    </a>
                    {/*end::Action*/}
                  </div>
                  {/*end::Record*/}
                  {/*begin::Record*/}
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/projects/project.html"
                      className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                    >
                      Project Delivery Preparation
                    </a>
                    {/*end::Title*/}
                    {/*begin::Label*/}
                    <div className="min-w-175px">
                      <span className="badge badge-light text-muted">
                        CRM System Development
                      </span>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img src="assets/media/avatars/300-20.jpg" alt="img" />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-bold bg-success text-inverse-primary">
                          B
                        </div>
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::Users*/}
                    {/*begin::Progress*/}
                    <div className="min-w-125px">
                      <span className="badge badge-light-success">
                        Completed
                      </span>
                    </div>
                    {/*end::Progress*/}
                    {/*begin::Action*/}
                    <a
                      href="../../demo1/dist/apps/projects/project.html"
                      className="btn btn-sm btn-light btn-active-light-primary"
                    >
                      View
                    </a>
                    {/*end::Action*/}
                  </div>
                  {/*end::Record*/}
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.3"
                        d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n2">
                {/*begin::Timeline heading*/}
                <div className="overflow-auto pe-3">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-bold mb-2">
                    Invitation for crafting engaging designs that speak human
                    workshop
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Sent at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Alan Nilson"
                    >
                      <img src="assets/media/avatars/300-1.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                  >
                    3 New Incoming Project Files:
                  </a>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Sent at 10:30 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Jan Hummer"
                    >
                      <img src="assets/media/avatars/300-23.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                      {/*begin::Icon*/}
                      <img
                        alt=""
                        className="w-30px me-3"
                        src="assets/media/svg/files/pdf.svg"
                      />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-bold">
                        {/*begin::Desc*/}
                        <a
                          href="../../demo1/dist/apps/projects/project.html"
                          className="fs-6 text-hover-primary fw-bolder"
                        >
                          Finance KPI App Guidelines
                        </a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-400">1.9mb</div>
                        {/*end::Number*/}
                      </div>
                      {/*begin::Info*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                      {/*begin::Icon*/}
                      <img
                        alt="../../demo1/dist/apps/projects/project.html"
                        className="w-30px me-3"
                        src="assets/media/svg/files/doc.svg"
                      />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-bold">
                        {/*begin::Desc*/}
                        <a
                          href="#"
                          className="fs-6 text-hover-primary fw-bolder"
                        >
                          Client UAT Testing Results
                        </a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-400">18kb</div>
                        {/*end::Number*/}
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center">
                      {/*begin::Icon*/}
                      <img
                        alt="../../demo1/dist/apps/projects/project.html"
                        className="w-30px me-3"
                        src="assets/media/svg/files/css.svg"
                      />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-bold">
                        {/*begin::Desc*/}
                        <a
                          href="#"
                          className="fs-6 text-hover-primary fw-bolder"
                        >
                          Finance Reports
                        </a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-400">20mb</div>
                        {/*end::Number*/}
                      </div>
                      {/*end::Icon*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.3"
                        d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-bold mb-2">
                    Task
                    <a href="#" className="text-primary fw-bolder me-1">
                      #45890
                    </a>
                    merged with
                    <a href="#" className="text-primary fw-bolder me-1">
                      #45890
                    </a>
                    in “Ads Pro Admin Dashboard project:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Initiated at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Nina Nilson"
                    >
                      <img src="assets/media/avatars/300-14.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.3"
                        d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-bold mb-2">
                    3 new application design concepts added:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Created at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Marcus Dotson"
                    >
                      <img src="assets/media/avatars/300-2.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                    {/*begin::Item*/}
                    <div className="overlay me-10">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img
                          alt="img"
                          className="rounded w-150px"
                          src="assets/media/stock/600x400/img-29.jpg"
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary btn-shadow"
                        >
                          Explore
                        </a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="overlay me-10">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img
                          alt="img"
                          className="rounded w-150px"
                          src="assets/media/stock/600x400/img-31.jpg"
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary btn-shadow"
                        >
                          Explore
                        </a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="overlay">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img
                          alt="img"
                          className="rounded w-150px"
                          src="assets/media/stock/600x400/img-40.jpg"
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary btn-shadow"
                        >
                          Explore
                        </a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-bold mb-2">
                    New case
                    <a href="#" className="text-primary fw-bolder me-1">
                      #67890
                    </a>
                    is assigned to you in Multi-platform Database Design project
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="overflow-auto pb-5">
                    {/*begin::Wrapper*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">
                        Added at 4:23 PM by
                      </div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <a href="#" className="text-primary fw-bolder me-1">
                        Alice Tan
                      </a>
                      {/*end::User*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.3"
                        d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-bold mb-2">
                    You have received a new order:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Placed at 5:05 AM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Robert Rich"
                    >
                      <img src="assets/media/avatars/300-4.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  {/*begin::Notice*/}
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                    {/*begin::Icon*/}
                    {/*begin::Svg Icon | path: icons/duotune/coding/cod004.svg*/}
                    <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    {/*end::Icon*/}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                      {/*begin::Content*/}
                      <div className="mb-3 mb-md-0 fw-bold">
                        <h4 className="text-gray-900 fw-bolder">
                          Database Backup Process Completed!
                        </h4>
                        <div className="fs-6 text-gray-700 pe-7">
                          Login into Admin Dashboard to make sure the data
                          integrity is OK
                        </div>
                      </div>
                      {/*end::Content*/}
                      {/*begin::Action*/}
                      <a
                        href="#"
                        className="btn btn-primary px-6 align-self-center text-nowrap"
                      >
                        Proceed
                      </a>
                      {/*end::Action*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Notice*/}
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-bold mb-2">
                    New order
                    <a href="#" className="text-primary fw-bolder me-1">
                      #67890
                    </a>
                    is placed for Workshow Planning &amp; Budget Estimation
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Placed at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <a href="#" className="text-primary fw-bolder me-1">
                      Jimmy Bold
                    </a>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
          </div>
          {/*end::Timeline items*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
      {/*begin::Footer*/}
      <div className="card-footer py-5 text-center" id="kt_activities_footer">
        <a
          href="../../demo1/dist/pages/user-profile/activity.html"
          className="btn btn-bg-body text-primary"
        >
          View All Activities
          {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
          <span className="svg-icon svg-icon-3 svg-icon-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                opacity="0.5"
                x={18}
                y={13}
                width={13}
                height={2}
                rx={1}
                transform="rotate(-180 18 13)"
                fill="currentColor"
              />
              <path
                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                fill="currentColor"
              />
            </svg>
          </span>
          {/*end::Svg Icon*/}
        </a>
      </div>
      {/*end::Footer*/}
    </div>
  </div>
  {/*end::Activities drawer*/}
  {/*begin::Chat drawer*/}
  <div
    id="kt_drawer_chat"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="chat"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_drawer_chat_toggle"
    data-kt-drawer-close="#kt_drawer_chat_close"
  >
    {/*begin::Messenger*/}
    <div
      className="card w-100 rounded-0 border-0"
      id="kt_drawer_chat_messenger"
    >
      {/*begin::Card header*/}
      <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
        {/*begin::Title*/}
        <div className="card-title">
          {/*begin::User*/}
          <div className="d-flex justify-content-center flex-column me-3">
            <a
              href="#"
              className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1"
            >
              Brian Cox
            </a>
            {/*begin::Info*/}
            <div className="mb-0 lh-1">
              <span className="badge badge-success badge-circle w-10px h-10px me-1" />
              <span className="fs-7 fw-bold text-muted">Active</span>
            </div>
            {/*end::Info*/}
          </div>
          {/*end::User*/}
        </div>
        {/*end::Title*/}
        {/*begin::Card toolbar*/}
        <div className="card-toolbar">
          {/*begin::Menu*/}
          <div className="me-2">
            <button
              className="btn btn-sm btn-icon btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              <i className="bi bi-three-dots fs-3" />
            </button>
            {/*begin::Menu 3*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
              data-kt-menu="true"
            >
              {/*begin::Heading*/}
              <div className="menu-item px-3">
                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                  Contacts
                </div>
              </div>
              {/*end::Heading*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a
                  href="#"
                  className="menu-link px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_users_search"
                >
                  Add Contact
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a
                  href="#"
                  className="menu-link flex-stack px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_invite_friends"
                >
                  Invite Contacts
                  <i
                    className="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    title="Specify a contact email to send an invitation"
                  />
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-start"
              >
                <a href="#" className="menu-link px-3">
                  <span className="menu-title">Groups</span>
                  <span className="menu-arrow" />
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Create Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Invite Members
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Settings
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3 my-1">
                <a
                  href="#"
                  className="menu-link px-3"
                  data-bs-toggle="tooltip"
                  title="Coming soon"
                >
                  Settings
                </a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu 3*/}
          </div>
          {/*end::Menu*/}
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-light-primary"
            id="kt_drawer_chat_close"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Card toolbar*/}
      </div>
      {/*end::Card header*/}
      {/*begin::Card body*/}
      <div className="card-body" id="kt_drawer_chat_messenger_body">
        {/*begin::Messages*/}
        <div
          className="scroll-y me-n5 pe-5"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
          data-kt-scroll-offset="0px"
        >
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">2 mins</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                How likely are you to recommend our company to your friends and
                family ?
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="d-flex justify-content-end mb-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">5 mins</span>
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                data-kt-element="message-text"
              >
                Hey there, we’re just writing to let you know that you’ve been
                subscribed to a repository on GitHub.
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">1 Hour</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                Ok, Understood!
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="d-flex justify-content-end mb-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">2 Hours</span>
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                data-kt-element="message-text"
              >
                You’ll receive notifications for all issues, pull requests!
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">3 Hours</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                You can unwatch this repository immediately by clicking here:
                <a href="https://keenthemes.com">Keenthemes.com</a>
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="d-flex justify-content-end mb-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">4 Hours</span>
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                data-kt-element="message-text"
              >
                Most purchased Business courses during this sale!
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">5 Hours</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                Company BBQ to celebrate the last quater achievements and goals.
                Food and drinks provided
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(template for out)*/}
          <div
            className="d-flex justify-content-end mb-10 d-none"
            data-kt-element="template-out"
          >
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">Just now</span>
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                data-kt-element="message-text"
              />
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(template for out)*/}
          {/*begin::Message(template for in)*/}
          <div
            className="d-flex justify-content-start mb-10 d-none"
            data-kt-element="template-in"
          >
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">Just now</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                Right before vacation season we have the next Big Deal for you.
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(template for in)*/}
        </div>
        {/*end::Messages*/}
      </div>
      {/*end::Card body*/}
      {/*begin::Card footer*/}
      <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
        {/*begin::Input*/}
        <textarea
          className="form-control form-control-flush mb-3"
          rows={1}
          data-kt-element="input"
          placeholder="Type a message"
          defaultValue={""}
        />
        {/*end::Input*/}
        {/*begin:Toolbar*/}
        <div className="d-flex flex-stack">
          {/*begin::Actions*/}
          <div className="d-flex align-items-center me-2">
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i className="bi bi-paperclip fs-3" />
            </button>
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i className="bi bi-upload fs-3" />
            </button>
          </div>
          {/*end::Actions*/}
          {/*begin::Send*/}
          <button
            className="btn btn-primary"
            type="button"
            data-kt-element="send"
          >
            Send
          </button>
          {/*end::Send*/}
        </div>
        {/*end::Toolbar*/}
      </div>
      {/*end::Card footer*/}
    </div>
    {/*end::Messenger*/}
  </div>
  {/*end::Chat drawer*/}
  {/*end::Drawers*/}
  {/*end::Main*/}
  {/*begin::Engage drawers*/}
  {/*begin::Demos drawer*/}
  <div
    id="kt_engage_demos"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_engage_demos_toggle"
    data-kt-drawer-close="#kt_engage_demos_close"
  >
    {/*begin::Card*/}
    <div className="card shadow-none rounded-0 w-100">
      {/*begin::Header*/}
      <div className="card-header" id="kt_engage_demos_header">
        <h3 className="card-title fw-bolder text-gray-700">Explore</h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6"
            id="kt_engage_demos_close"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body" id="kt_engage_demos_body">
        {/*begin::Content*/}
        <div
          id="kt_explore_scroll"
          className="scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_engage_demos_body"
          data-kt-scroll-dependencies="#kt_engage_demos_header"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Wrapper*/}
          <div className="mb-0">
            {/*begin::Heading*/}
            <div className="mb-7">
              <div className="d-flex flex-stack">
                <h3 className="mb-0">Metronic Licenses</h3>
                <a
                  href="https://themeforest.net/licenses/standard"
                  className="fw-bold"
                  target="_blank"
                >
                  License FAQs
                </a>
              </div>
            </div>
            {/*end::Heading*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                      Regular License
                    </div>
                    <i
                      className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-dark"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client in a single end product which end users are not charged for"
                    />
                  </div>
                  <div className="fs-7 text-muted">
                    For single end product used by you or one client
                  </div>
                </div>
                <div className="text-nowrap">
                  <span className="text-muted fs-7 fw-bold me-n1">$</span>
                  <span className="text-dark fs-1 fw-bolder">39</span>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                      Extended License
                    </div>
                    <i
                      className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-dark"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client, in a single end product which end users can be charged for."
                    />
                  </div>
                  <div className="fs-7 text-muted">
                    For single SaaS app with paying users
                  </div>
                </div>
                <div className="text-nowrap">
                  <span className="text-muted fs-7 fw-bold me-n1">$</span>
                  <span className="text-dark fs-1 fw-bolder">969</span>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                      Custom License
                    </div>
                  </div>
                  <div className="fs-7 text-muted">
                    Reach us for custom license offers.
                  </div>
                </div>
                <div className="text-nowrap">
                  <a
                    href="https://keenthemes.com/contact/"
                    className="btn btn-sm btn-success"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::Purchase*/}
            <a
              href="https://1.envato.market/EA4JP"
              className="btn btn-primary mb-15 w-100"
            >
              Buy Now
            </a>
            {/*end::Purchase*/}
            {/*begin::Demos*/}
            <div className="mb-0">
              <h3 className="fw-bolder text-center mb-6">Metronic Demos</h3>
              {/*begin::Row*/}
              <div className="row g-5">
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-success rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo1.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo1"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 1
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo2.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo2"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 2
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo3.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo3"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 3
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo4.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo4"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 4
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo5.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo5"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 5
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo6.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo6"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 6
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo7.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo7"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 7
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo8.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo8"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 8
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo9.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo9"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 9
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo10.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo10"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 10
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo11.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo11"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 11
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo12.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo12"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 12
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo13.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo13"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 13
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo14.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo14"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 14
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo15.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo15"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 15
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo16.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo16"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 16
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo17.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo17"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 17
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo18.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo18"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 18
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo19.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo19"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 19
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo20.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo20"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 20
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo21.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo21"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 21
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo22.png"
                        alt="demo"
                        className="w-100 opacity-25"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <div className="badge badge-white px-6 py-4 fw-bold fs-base shadow">
                        Coming soon
                      </div>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo23.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/metronic8/demo23"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 23
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="assets/media/demos/demo24.png"
                        alt="demo"
                        className="w-100 opacity-25"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <div className="badge badge-white px-6 py-4 fw-bold fs-base shadow">
                        Coming soon
                      </div>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Demos*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Demos drawer*/}
  {/*begin::Help drawer*/}
  <div
    id="kt_help"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="help"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'md': '525px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_help_toggle"
    data-kt-drawer-close="#kt_help_close"
  >
    {/*begin::Card*/}
    <div className="card shadow-none rounded-0 w-100">
      {/*begin::Header*/}
      <div className="card-header" id="kt_help_header">
        <h5 className="card-title fw-bold text-gray-600">
          Learn &amp; Get Inspired
        </h5>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
            id="kt_help_close"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body" id="kt_help_body">
        {/*begin::Content*/}
        <div
          id="kt_help_scroll"
          className="hover-scroll-overlay-y"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_help_body"
          data-kt-scroll-dependencies="#kt_help_header"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Support*/}
          <div className="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10">
            {/*begin::Heading*/}
            <h2 className="fw-bolder mb-5">
              Support at
              <a href="https://devs.keenthemes.com" className="">
                devs.keenthemes.com
              </a>
            </h2>
            {/*end::Heading*/}
            {/*begin::Description*/}
            <div className="fs-5 fw-bold mb-5">
              <span className="text-gray-500">
                Join our developers community to find answer to your question
                and help others.
              </span>
              <a
                className="explore-link d-none"
                href="https://keenthemes.com/licensing"
              >
                FAQs
              </a>
            </div>
            {/*end::Description*/}
            {/*begin::Link*/}
            <a
              href="https://devs.keenthemes.com"
              className="btn btn-lg explore-btn-primary w-100"
            >
              Get Support
            </a>
            {/*end::Link*/}
          </div>
          {/*end::Support*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning">
              {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
              <span className="svg-icon svg-icon-warning svg-icon-2x svg-icon-lg-3x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="../../demo1/dist/documentation/getting-started.html"
                  className="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1"
                >
                  Documentation &amp; Videos
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-bold fs-7 fs-lg-6">
                  From guides and video tutorials, to live demos and code
                  examples to get started.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary">
              {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg*/}
              <span className="svg-icon svg-icon-primary svg-icon-2x svg-icon-lg-3x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="../../demo1/dist/documentation/base/utilities.html"
                  className="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1"
                >
                  Plugins &amp; Components
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-bold fs-7 fs-lg-6">
                  Check out our 300+ in-house components and customized
                  3rd-party plugins.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info">
              {/*begin::Svg Icon | path: icons/duotune/art/art006.svg*/}
              <span className="svg-icon svg-icon-info svg-icon-2x svg-icon-lg-3x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html"
                  className="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1"
                >
                  Layout Builder
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-bold fs-7 fs-lg-6">
                  Build your layout, preview it and export the HTML for server
                  side integration.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-success">
              {/*begin::Svg Icon | path: icons/duotune/files/fil021.svg*/}
              <span className="svg-icon svg-icon-success svg-icon-2x svg-icon-lg-3x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="https://devs.keenthemes.com/metronic"
                  className="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1"
                >
                  Metronic Downloads
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-bold fs-7 fs-lg-6">
                  Download your prefered framework and demo with one click.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
          {/*begin::Link*/}
          <div className="d-flex align-items-center mb-7">
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger">
              {/*begin::Svg Icon | path: icons/duotune/electronics/elc009.svg*/}
              <span className="svg-icon svg-icon-danger svg-icon-2x svg-icon-lg-3x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 9V8C13 7.4 13.4 7 14 7H15C16.7 7 18 5.7 18 4V3C18 2.4 17.6 2 17 2C16.4 2 16 2.4 16 3V4C16 4.6 15.6 5 15 5H14C12.3 5 11 6.3 11 8V9H13Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M21 22H3C2.4 22 2 21.6 2 21V10C2 9.4 2.4 9 3 9H21C21.6 9 22 9.4 22 10V21C22 21.6 21.6 22 21 22ZM5 12C4.4 12 4 12.4 4 13C4 13.6 4.4 14 5 14C5.6 14 6 13.6 6 13C6 12.4 5.6 12 5 12ZM8 12C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14C8.6 14 9 13.6 9 13C9 12.4 8.6 12 8 12ZM11 12C10.4 12 10 12.4 10 13C10 13.6 10.4 14 11 14C11.6 14 12 13.6 12 13C12 12.4 11.6 12 11 12ZM14 12C13.4 12 13 12.4 13 13C13 13.6 13.4 14 14 14C14.6 14 15 13.6 15 13C15 12.4 14.6 12 14 12ZM9 15C8.4 15 8 15.4 8 16C8 16.6 8.4 17 9 17C9.6 17 10 16.6 10 16C10 15.4 9.6 15 9 15ZM12 15C11.4 15 11 15.4 11 16C11 16.6 11.4 17 12 17C12.6 17 13 16.6 13 16C13 15.4 12.6 15 12 15ZM15 15C14.4 15 14 15.4 14 16C14 16.6 14.4 17 15 17C15.6 17 16 16.6 16 16C16 15.4 15.6 15 15 15ZM19 18C18.4 18 18 18.4 18 19C18 19.6 18.4 20 19 20C19.6 20 20 19.6 20 19C20 18.4 19.6 18 19 18ZM7 19C7 18.4 6.6 18 6 18H5C4.4 18 4 18.4 4 19C4 19.6 4.4 20 5 20H6C6.6 20 7 19.6 7 19ZM7 16C7 15.4 6.6 15 6 15H5C4.4 15 4 15.4 4 16C4 16.6 4.4 17 5 17H6C6.6 17 7 16.6 7 16ZM17 14H19C19.6 14 20 13.6 20 13C20 12.4 19.6 12 19 12H17C16.4 12 16 12.4 16 13C16 13.6 16.4 14 17 14ZM18 17H19C19.6 17 20 16.6 20 16C20 15.4 19.6 15 19 15H18C17.4 15 17 15.4 17 16C17 16.6 17.4 17 18 17ZM17 19C17 18.4 16.6 18 16 18H9C8.4 18 8 18.4 8 19C8 19.6 8.4 20 9 20H16C16.6 20 17 19.6 17 19Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <a
                  href="../../demo1/dist/documentation/getting-started/changelog.html"
                  className="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1"
                >
                  What's New
                </a>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-bold fs-7 fs-lg-6">
                  Latest features and improvements added with our users feedback
                  in mind.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
              <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x={18}
                    y={13}
                    width={13}
                    height={2}
                    rx={1}
                    transform="rotate(-180 18 13)"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Link*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Help drawer*/}
  {/*end::Engage drawers*/}
  {/*begin::Engage toolbar*/}
  <div className="engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2">
    {/*begin::Demos drawer toggle*/}
    <button
      id="kt_engage_demos_toggle"
      className="engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0"
      title="Check out 22 more demos"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      data-bs-dismiss="click"
      data-bs-trigger="hover"
    >
      <span id="kt_engage_demos_label">Demos</span>
    </button>
    {/*end::Demos drawer toggle*/}
    {/*begin::Help drawer toggle*/}
    <button
      id="kt_help_toggle"
      className="engage-help-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0"
      title="Learn & Get Inspired"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      data-bs-dismiss="click"
      data-bs-trigger="hover"
    >
      Help
    </button>
    {/*end::Help drawer toggle*/}
    {/*begin::Purchase link*/}
    <a
      href="https://1.envato.market/EA4JP"
      target="_blank"
      className="engage-purchase-link btn btn-color-gray-700 bg-body btn-active-color-gray-900' btn-flex h-35px px-5 shadow-sm rounded-top-0"
    >
      Buy now
    </a>
    {/*end::Purchase link*/}
  </div>
  {/*end::Engage toolbar*/}
  {/*begin::Scrolltop*/}
  <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
    <span className="svg-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          opacity="0.5"
          x={13}
          y={6}
          width={13}
          height={2}
          rx={1}
          transform="rotate(90 13 6)"
          fill="currentColor"
        />
        <path
          d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
          fill="currentColor"
        />
      </svg>
    </span>
    {/*end::Svg Icon*/}
  </div>
  {/*end::Scrolltop*/}
  {/*begin::Modals*/}
  {/*begin::Modal - Upgrade plan*/}
  <div
    className="modal fade"
    id="kt_modal_upgrade_plan"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-xl">
      {/*begin::Modal content*/}
      <div className="modal-content rounded">
        {/*begin::Modal header*/}
        <div className="modal-header justify-content-end border-0 pb-0">
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
          {/*begin::Heading*/}
          <div className="mb-13 text-center">
            <h1 className="mb-3">Upgrade a Plan</h1>
            <div className="text-muted fw-bold fs-5">
              If you need more info, please check
              <a href="#" className="link-primary fw-bolder">
                Pricing Guidelines
              </a>
              .
            </div>
          </div>
          {/*end::Heading*/}
          {/*begin::Plans*/}
          <div className="d-flex flex-column">
            {/*begin::Nav group*/}
            <div
              className="nav-group nav-group-outline mx-auto"
              data-kt-buttons="true"
            >
              <button
                className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                data-kt-plan="month"
              >
                Monthly
              </button>
              <button
                className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                data-kt-plan="annual"
              >
                Annual
              </button>
            </div>
            {/*end::Nav group*/}
            {/*begin::Row*/}
            <div className="row mt-10">
              {/*begin::Col*/}
              <div className="col-lg-6 mb-10 mb-lg-0">
                {/*begin::Tabs*/}
                <div className="nav flex-column">
                  {/*begin::Tab link*/}
                  <div
                    className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_upgrade_plan_startup"
                  >
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultChecked="checked"
                          defaultValue="startup"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                          Startup
                        </h2>
                        <div className="fw-bold opacity-50">
                          Best for startups
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span
                        className="fs-3x fw-bolder"
                        data-kt-plan-price-month={39}
                        data-kt-plan-price-annual={399}
                      >
                        39
                      </span>
                      <span className="fs-7 opacity-50">
                        /<span data-kt-element="period">Mon</span>
                      </span>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <div
                    className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_upgrade_plan_advanced"
                  >
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultValue="advanced"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                          Advanced
                        </h2>
                        <div className="fw-bold opacity-50">
                          Best for 100+ team size
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span
                        className="fs-3x fw-bolder"
                        data-kt-plan-price-month={339}
                        data-kt-plan-price-annual={3399}
                      >
                        339
                      </span>
                      <span className="fs-7 opacity-50">
                        /<span data-kt-element="period">Mon</span>
                      </span>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <div
                    className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_upgrade_plan_enterprise"
                  >
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultValue="enterprise"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                          Enterprise
                          <span className="badge badge-light-success ms-2 fs-7">
                            Most popular
                          </span>
                        </h2>
                        <div className="fw-bold opacity-50">
                          Best value for 1000+ team
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span
                        className="fs-3x fw-bolder"
                        data-kt-plan-price-month={999}
                        data-kt-plan-price-annual={9999}
                      >
                        999
                      </span>
                      <span className="fs-7 opacity-50">
                        /<span data-kt-element="period">Mon</span>
                      </span>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6">
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultValue="custom"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                          Custom
                        </h2>
                        <div className="fw-bold opacity-50">
                          Requet a custom license
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <a href="#" className="btn btn-sm btn-primary">
                        Contact Us
                      </a>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                </div>
                {/*end::Tabs*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-lg-6">
                {/*begin::Tab content*/}
                <div className="tab-content rounded h-100 bg-light p-10">
                  {/*begin::Tab Pane*/}
                  <div
                    className="tab-pane fade show active"
                    id="kt_upgrade_plan_startup"
                  >
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bolder text-dark">
                        What’s in Startup Plan?
                      </h2>
                      <div className="text-muted fw-bold">
                        Optimal for 10+ team size and new startup
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Up to 10 Active Users
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Up to 30 Project Integrations
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Analytics Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                          Finance Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <rect
                              x={7}
                              y="15.3137"
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(-45 7 15.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="8.41422"
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(45 8.41422 7)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                          Accounting Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <rect
                              x={7}
                              y="15.3137"
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(-45 7 15.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="8.41422"
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(45 8.41422 7)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                          Network Platform
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <rect
                              x={7}
                              y="15.3137"
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(-45 7 15.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="8.41422"
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(45 8.41422 7)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                          Unlimited Cloud Space
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <rect
                              x={7}
                              y="15.3137"
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(-45 7 15.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="8.41422"
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(45 8.41422 7)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                  {/*begin::Tab Pane*/}
                  <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bolder text-dark">
                        What’s in Startup Plan?
                      </h2>
                      <div className="text-muted fw-bold">
                        Optimal for 100+ team size and grown company
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Up to 10 Active Users
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Up to 30 Project Integrations
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Analytics Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Finance Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Accounting Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                          Network Platform
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <rect
                              x={7}
                              y="15.3137"
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(-45 7 15.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="8.41422"
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(45 8.41422 7)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">
                          Unlimited Cloud Space
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <rect
                              x={7}
                              y="15.3137"
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(-45 7 15.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="8.41422"
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(45 8.41422 7)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                  {/*begin::Tab Pane*/}
                  <div
                    className="tab-pane fade"
                    id="kt_upgrade_plan_enterprise"
                  >
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bolder text-dark">
                        What’s in Startup Plan?
                      </h2>
                      <div className="text-muted fw-bold">
                        Optimal for 1000+ team and enterpise
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Up to 10 Active Users
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Up to 30 Project Integrations
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Analytics Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Finance Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Accounting Module
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Network Platform
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                          Unlimited Cloud Space
                        </span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="currentColor"
                            />
                            <path
                              d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                </div>
                {/*end::Tab content*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Plans*/}
          {/*begin::Actions*/}
          <div className="d-flex flex-center flex-row-fluid pt-12">
            <button
              type="reset"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Upgrade Plan
            </button>
          </div>
          {/*end::Actions*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Upgrade plan*/}
  {/*begin::Modal - Create App*/}
  <div
    className="modal fade"
    id="kt_modal_create_app"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-dialog-centered mw-900px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header">
          {/*begin::Modal title*/}
          <h2>Create App</h2>
          {/*end::Modal title*/}
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body py-lg-10 px-lg-10">
          {/*begin::Stepper*/}
          <div
            className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_app_stepper"
          >
            {/*begin::Aside*/}
            <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              {/*begin::Nav*/}
              <div className="stepper-nav ps-lg-10">
                {/*begin::Step 1*/}
                <div
                  className="stepper-item current"
                  data-kt-stepper-element="nav"
                >
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">1</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Details</h3>
                    <div className="stepper-desc">Name your App</div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 1*/}
                {/*begin::Step 2*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">2</span>
                  </div>
                  {/*begin::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Frameworks</h3>
                    <div className="stepper-desc">
                      Define your app framework
                    </div>
                  </div>
                  {/*begin::Label*/}
                </div>
                {/*end::Step 2*/}
                {/*begin::Step 3*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">3</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Database</h3>
                    <div className="stepper-desc">
                      Select the app database type
                    </div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 3*/}
                {/*begin::Step 4*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">4</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Billing</h3>
                    <div className="stepper-desc">Provide payment details</div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 4*/}
                {/*begin::Step 5*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">5</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Completed</h3>
                    <div className="stepper-desc">Review and Submit</div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 5*/}
              </div>
              {/*end::Nav*/}
            </div>
            {/*begin::Aside*/}
            {/*begin::Content*/}
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              {/*begin::Form*/}
              <form
                className="form"
                noValidate="novalidate"
                id="kt_modal_create_app_form"
              >
                {/*begin::Step 1*/}
                <div className="current" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                        <span className="required">App Name</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="Specify your unique app name"
                        />
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        name="name"
                        placeholder=""
                        defaultValue=""
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                        <span className="required">Category</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="Select your app category"
                        />
                      </label>
                      {/*end::Label*/}
                      {/*begin:Options*/}
                      <div className="fv-row">
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      opacity="0.3"
                                      d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">
                                Quick Online Courses
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text structure is just one SEO
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={1}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-danger">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                <span className="svg-icon svg-icon-1 svg-icon-danger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <rect
                                      x={2}
                                      y={2}
                                      width={9}
                                      height={9}
                                      rx={2}
                                      fill="currentColor"
                                    />
                                    <rect
                                      opacity="0.3"
                                      x={13}
                                      y={2}
                                      width={9}
                                      height={9}
                                      rx={2}
                                      fill="currentColor"
                                    />
                                    <rect
                                      opacity="0.3"
                                      x={13}
                                      y={13}
                                      width={9}
                                      height={9}
                                      rx={2}
                                      fill="currentColor"
                                    />
                                    <rect
                                      opacity="0.3"
                                      x={2}
                                      y={13}
                                      width={9}
                                      height={9}
                                      rx={2}
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">
                                Face to Face Discussions
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text structure is just one
                                aspect
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={2}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-success">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                                <span className="svg-icon svg-icon-1 svg-icon-success">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      opacity="0.3"
                                      d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">
                                Full Intro Training
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text structure copywriting
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={3}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end:Options*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 1*/}
                {/*begin::Step 2*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                        <span className="required">Select Framework</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="Specify your apps framework"
                        />
                      </label>
                      {/*end::Label*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-html5 text-warning fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">HTML5</span>
                            <span className="fs-7 text-muted">
                              Base Web Projec
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultChecked="checked"
                            name="framework"
                            defaultValue={1}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fab fa-react text-success fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">ReactJS</span>
                            <span className="fs-7 text-muted">
                              Robust and flexible app framework
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={2}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-angular text-danger fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Angular</span>
                            <span className="fs-7 text-muted">
                              Powerful data mangement
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={3}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                              <i className="fab fa-vuejs text-primary fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Vue</span>
                            <span className="fs-7 text-muted">
                              Lightweight and responsive framework
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={4}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 2*/}
                {/*begin::Step 3*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                      {/*begin::Label*/}
                      <label className="required fs-5 fw-bold mb-2">
                        Database Name
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        name="dbname"
                        placeholder=""
                        defaultValue="master_db"
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                        <span className="required">Select Database Engine</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="Select your app database engine"
                        />
                      </label>
                      {/*end::Label*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fas fa-database text-success fs-2x" />
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">MySQL</span>
                            <span className="fs-7 text-muted">
                              Basic MySQL database
                            </span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dbengine"
                            defaultChecked="checked"
                            defaultValue={1}
                          />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-google text-danger fs-2x" />
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Firebase</span>
                            <span className="fs-7 text-muted">
                              Google based app data management
                            </span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dbengine"
                            defaultValue={2}
                          />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-amazon text-warning fs-2x" />
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">DynamoDB</span>
                            <span className="fs-7 text-muted">
                              Amazon Fast NoSQL Database
                            </span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dbengine"
                            defaultValue={3}
                          />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 3*/}
                {/*begin::Step 4*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                        <span className="required">Name On Card</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="Specify a card holder's name"
                        />
                      </label>
                      {/*end::Label*/}
                      <input
                        type="text"
                        className="form-control form-control-solid"
                        placeholder=""
                        name="card_name"
                        defaultValue="Max Doe"
                      />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="required fs-6 fw-bold form-label mb-2">
                        Card Number
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input wrapper*/}
                      <div className="position-relative">
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder="Enter card number"
                          name="card_number"
                          defaultValue="4111 1111 1111 1111"
                        />
                        {/*end::Input*/}
                        {/*begin::Card logos*/}
                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                          <img
                            src="assets/media/svg/card-logos/visa.svg"
                            alt=""
                            className="h-25px"
                          />
                          <img
                            src="assets/media/svg/card-logos/mastercard.svg"
                            alt=""
                            className="h-25px"
                          />
                          <img
                            src="assets/media/svg/card-logos/american-express.svg"
                            alt=""
                            className="h-25px"
                          />
                        </div>
                        {/*end::Card logos*/}
                      </div>
                      {/*end::Input wrapper*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-10">
                      {/*begin::Col*/}
                      <div className="col-md-8 fv-row">
                        {/*begin::Label*/}
                        <label className="required fs-6 fw-bold form-label mb-2">
                          Expiration Date
                        </label>
                        {/*end::Label*/}
                        {/*begin::Row*/}
                        <div className="row fv-row">
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select
                              name="card_expiry_month"
                              className="form-select form-select-solid"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Month"
                            >
                              <option />
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select
                              name="card_expiry_year"
                              className="form-select form-select-solid"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Year"
                            >
                              <option />
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                              <option value={2024}>2024</option>
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                              <option value={2028}>2028</option>
                              <option value={2029}>2029</option>
                              <option value={2030}>2030</option>
                              <option value={2031}>2031</option>
                              <option value={2032}>2032</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-md-4 fv-row">
                        {/*begin::Label*/}
                        <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                          <span className="required">CVV</span>
                          <i
                            className="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter a card CVV code"
                          />
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input wrapper*/}
                        <div className="position-relative">
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            minLength={3}
                            maxLength={4}
                            placeholder="CVV"
                            name="card_cvv"
                          />
                          {/*end::Input*/}
                          {/*begin::CVV icon*/}
                          <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                            {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                            <span className="svg-icon svg-icon-2hx">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M22 7H2V11H22V7Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::CVV icon*/}
                        </div>
                        {/*end::Input wrapper*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Label*/}
                      <div className="me-5">
                        <label className="fs-6 fw-bold form-label">
                          Save Card for further billing?
                        </label>
                        <div className="fs-7 fw-bold text-muted">
                          If you need more info, please check budget planning
                        </div>
                      </div>
                      {/*end::Label*/}
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked="checked"
                        />
                        <span className="form-check-label fw-bold text-muted">
                          Save Card
                        </span>
                      </label>
                      {/*end::Switch*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 4*/}
                {/*begin::Step 5*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100 text-center">
                    {/*begin::Heading*/}
                    <h1 className="fw-bolder text-dark mb-3">Release!</h1>
                    {/*end::Heading*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-bold fs-3">
                      Submit your app to kickstart your project.
                    </div>
                    {/*end::Description*/}
                    {/*begin::Illustration*/}
                    <div className="text-center px-4 py-15">
                      <img
                        src="assets/media/illustrations/sketchy-1/9.png"
                        alt=""
                        className="mw-100 mh-300px"
                      />
                    </div>
                    {/*end::Illustration*/}
                  </div>
                </div>
                {/*end::Step 5*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-stack pt-10">
                  {/*begin::Wrapper*/}
                  <div className="me-2">
                    <button
                      type="button"
                      className="btn btn-lg btn-light-primary me-3"
                      data-kt-stepper-action="previous"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                      <span className="svg-icon svg-icon-3 me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            opacity="0.5"
                            x={6}
                            y={11}
                            width={13}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                          <path
                            d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}Back
                    </button>
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Wrapper*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-lg btn-primary"
                      data-kt-stepper-action="submit"
                    >
                      <span className="indicator-label">
                        Submit
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                        <span className="svg-icon svg-icon-3 ms-2 me-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.5"
                              x={18}
                              y={13}
                              width={13}
                              height={2}
                              rx={1}
                              transform="rotate(-180 18 13)"
                              fill="currentColor"
                            />
                            <path
                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-lg btn-primary"
                      data-kt-stepper-action="next"
                    >
                      Continue
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                      <span className="svg-icon svg-icon-3 ms-1 me-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            opacity="0.5"
                            x={18}
                            y={13}
                            width={13}
                            height={2}
                            rx={1}
                            transform="rotate(-180 18 13)"
                            fill="currentColor"
                          />
                          <path
                            d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Actions*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Stepper*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Create App*/}
  {/*begin::Modal - Invite Friends*/}
  <div
    className="modal fade"
    id="kt_modal_invite_friends"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog mw-650px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header pb-0 border-0 justify-content-end">
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*begin::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          {/*begin::Heading*/}
          <div className="text-center mb-13">
            {/*begin::Title*/}
            <h1 className="mb-3">Invite a Friend</h1>
            {/*end::Title*/}
            {/*begin::Description*/}
            <div className="text-muted fw-bold fs-5">
              If you need more info, please check out
              <a href="#" className="link-primary fw-bolder">
                FAQ Page
              </a>
              .
            </div>
            {/*end::Description*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Google Contacts Invite*/}
          <div className="btn btn-light-primary fw-bolder w-100 mb-8">
            <img
              alt="Logo"
              src="assets/media/svg/brand-logos/google-icon.svg"
              className="h-20px me-3"
            />
            Invite Gmail Contacts
          </div>
          {/*end::Google Contacts Invite*/}
          {/*begin::Separator*/}
          <div className="separator d-flex flex-center mb-8">
            <span className="text-uppercase bg-body fs-7 fw-bold text-muted px-3">
              or
            </span>
          </div>
          {/*end::Separator*/}
          {/*begin::Textarea*/}
          <textarea
            className="form-control form-control-solid mb-8"
            rows={3}
            placeholder="Type or paste emails here"
            defaultValue={""}
          />
          {/*end::Textarea*/}
          {/*begin::Users*/}
          <div className="mb-10">
            {/*begin::Heading*/}
            <div className="fs-6 fw-bold mb-2">Your Invitations</div>
            {/*end::Heading*/}
            {/*begin::List*/}
            <div className="mh-300px scroll-y me-n7 pe-7">
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Emma Smith
                    </a>
                    <div className="fw-bold text-muted">smith@kpmg.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                      M
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Melody Macy
                    </a>
                    <div className="fw-bold text-muted">melody@altbox.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1} selected="selected">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Max Smith
                    </a>
                    <div className="fw-bold text-muted">max@kt.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Sean Bean
                    </a>
                    <div className="fw-bold text-muted">sean@dellito.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Brian Cox
                    </a>
                    <div className="fw-bold text-muted">brian@exchange.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-warning text-warning fw-bold">
                      C
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Mikaela Collins
                    </a>
                    <div className="fw-bold text-muted">mik@pex.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Francis Mitcham
                    </a>
                    <div className="fw-bold text-muted">f.mit@kpmg.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                      O
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Olivia Wild
                    </a>
                    <div className="fw-bold text-muted">
                      olivia@corpmail.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-primary text-primary fw-bold">
                      N
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Neil Owen
                    </a>
                    <div className="fw-bold text-muted">
                      owen.neil@gmail.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1} selected="selected">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Dan Wilson
                    </a>
                    <div className="fw-bold text-muted">dam@consilting.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-bold">
                      E
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Emma Bold
                    </a>
                    <div className="fw-bold text-muted">emma@intenso.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Ana Crown
                    </a>
                    <div className="fw-bold text-muted">ana.cf@limtel.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1} selected="selected">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-info text-info fw-bold">
                      A
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Robert Doe
                    </a>
                    <div className="fw-bold text-muted">robert@benko.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      John Miller
                    </a>
                    <div className="fw-bold text-muted">miller@mapple.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-success text-success fw-bold">
                      L
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Lucy Kunic
                    </a>
                    <div className="fw-bold text-muted">lucy.m@fentech.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Ethan Wilder
                    </a>
                    <div className="fw-bold text-muted">ethan@loop.com.au</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1} selected="selected">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                    >
                      Ana Crown
                    </a>
                    <div className="fw-bold text-muted">ana.cf@limtel.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
            </div>
            {/*end::List*/}
          </div>
          {/*end::Users*/}
          {/*begin::Notice*/}
          <div className="d-flex flex-stack">
            {/*begin::Label*/}
            <div className="me-5 fw-bold">
              <label className="fs-6">Adding Users by Team Members</label>
              <div className="fs-7 text-muted">
                If you need more info, please check budget planning
              </div>
            </div>
            {/*end::Label*/}
            {/*begin::Switch*/}
            <label className="form-check form-switch form-check-custom form-check-solid">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue={1}
                defaultChecked="checked"
              />
              <span className="form-check-label fw-bold text-muted">
                Allowed
              </span>
            </label>
            {/*end::Switch*/}
          </div>
          {/*end::Notice*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Invite Friend*/}
  {/*begin::Modal - Users Search*/}
  <div
    className="modal fade"
    id="kt_modal_users_search"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-dialog-centered mw-650px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header pb-0 border-0 justify-content-end">
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x={6}
                  y="17.3137"
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                />
                <rect
                  x="7.41422"
                  y={6}
                  width={16}
                  height={2}
                  rx={1}
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*begin::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          {/*begin::Content*/}
          <div className="text-center mb-13">
            <h1 className="mb-3">Search Users</h1>
            <div className="text-muted fw-bold fs-5">
              Invite Collaborators To Your Project
            </div>
          </div>
          {/*end::Content*/}
          {/*begin::Search*/}
          <div
            id="kt_modal_users_search_handler"
            data-kt-search-keypress="true"
            data-kt-search-min-length={2}
            data-kt-search-enter="enter"
            data-kt-search-layout="inline"
          >
            {/*begin::Form*/}
            <form
              data-kt-search-element="form"
              className="w-100 position-relative mb-5"
              autoComplete="off"
            >
              {/*begin::Hidden input(Added to disable form autocomplete)*/}
              <input type="hidden" />
              {/*end::Hidden input*/}
              {/*begin::Icon*/}
              {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
              <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x="17.0365"
                    y="15.1223"
                    width="8.15546"
                    height={2}
                    rx={1}
                    transform="rotate(45 17.0365 15.1223)"
                    fill="currentColor"
                  />
                  <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              {/*end::Icon*/}
              {/*begin::Input*/}
              <input
                type="text"
                className="form-control form-control-lg form-control-solid px-15"
                name="search"
                defaultValue=""
                placeholder="Search by username, full name or email..."
                data-kt-search-element="input"
              />
              {/*end::Input*/}
              {/*begin::Spinner*/}
              <span
                className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                data-kt-search-element="spinner"
              >
                <span className="spinner-border h-15px w-15px align-middle text-muted" />
              </span>
              {/*end::Spinner*/}
              {/*begin::Reset*/}
              <span
                className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                data-kt-search-element="clear"
              >
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x={6}
                      y="17.3137"
                      width={16}
                      height={2}
                      rx={1}
                      transform="rotate(-45 6 17.3137)"
                      fill="currentColor"
                    />
                    <rect
                      x="7.41422"
                      y={6}
                      width={16}
                      height={2}
                      rx={1}
                      transform="rotate(45 7.41422 6)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </span>
              {/*end::Reset*/}
            </form>
            {/*end::Form*/}
            {/*begin::Wrapper*/}
            <div className="py-5">
              {/*begin::Suggestions*/}
              <div data-kt-search-element="suggestions">
                {/*begin::Heading*/}
                <h3 className="fw-bold mb-5">Recently searched:</h3>
                {/*end::Heading*/}
                {/*begin::Users*/}
                <div className="mh-375px scroll-y me-n7 pe-7">
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="fs-6 text-gray-800 me-2">
                        Emma Smith
                      </span>
                      <span className="badge badge-light">Art Director</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <span className="symbol-label bg-light-danger text-danger fw-bold">
                        M
                      </span>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="fs-6 text-gray-800 me-2">
                        Melody Macy
                      </span>
                      <span className="badge badge-light">
                        Marketing Analytic
                      </span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                      <span className="badge badge-light">
                        Software Enginer
                      </span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                      <span className="badge badge-light">Web Developer</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                      <span className="badge badge-light">UI/UX Designer</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                </div>
                {/*end::Users*/}
              </div>
              {/*end::Suggestions*/}
              {/*begin::Results(add d-none to below element to hide the users list by default)*/}
              <div data-kt-search-element="results" className="d-none">
                {/*begin::Users*/}
                <div className="mh-375px scroll-y me-n7 pe-7">
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={0}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='0']"
                          defaultValue={0}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Smith
                        </a>
                        <div className="fw-bold text-muted">smith@kpmg.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={1}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='1']"
                          defaultValue={1}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          M
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Melody Macy
                        </a>
                        <div className="fw-bold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={2}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='2']"
                          defaultValue={2}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Max Smith
                        </a>
                        <div className="fw-bold text-muted">max@kt.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={3}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='3']"
                          defaultValue={3}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Sean Bean
                        </a>
                        <div className="fw-bold text-muted">
                          sean@dellito.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={4}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='4']"
                          defaultValue={4}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Brian Cox
                        </a>
                        <div className="fw-bold text-muted">
                          brian@exchange.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={5}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='5']"
                          defaultValue={5}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-warning text-warning fw-bold">
                          C
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Mikaela Collins
                        </a>
                        <div className="fw-bold text-muted">mik@pex.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={6}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='6']"
                          defaultValue={6}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Francis Mitcham
                        </a>
                        <div className="fw-bold text-muted">f.mit@kpmg.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={7}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='7']"
                          defaultValue={7}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          O
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Olivia Wild
                        </a>
                        <div className="fw-bold text-muted">
                          olivia@corpmail.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={8}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='8']"
                          defaultValue={8}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-primary text-primary fw-bold">
                          N
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Neil Owen
                        </a>
                        <div className="fw-bold text-muted">
                          owen.neil@gmail.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={9}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='9']"
                          defaultValue={9}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Dan Wilson
                        </a>
                        <div className="fw-bold text-muted">
                          dam@consilting.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={10}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='10']"
                          defaultValue={10}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          E
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Bold
                        </a>
                        <div className="fw-bold text-muted">
                          emma@intenso.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={11}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='11']"
                          defaultValue={11}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Ana Crown
                        </a>
                        <div className="fw-bold text-muted">
                          ana.cf@limtel.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={12}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='12']"
                          defaultValue={12}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-bold">
                          A
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Robert Doe
                        </a>
                        <div className="fw-bold text-muted">
                          robert@benko.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={13}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='13']"
                          defaultValue={13}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          John Miller
                        </a>
                        <div className="fw-bold text-muted">
                          miller@mapple.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={14}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='14']"
                          defaultValue={14}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-success text-success fw-bold">
                          L
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Lucy Kunic
                        </a>
                        <div className="fw-bold text-muted">
                          lucy.m@fentech.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={15}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='15']"
                          defaultValue={15}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Ethan Wilder
                        </a>
                        <div className="fw-bold text-muted">
                          ethan@loop.com.au
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={16}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='16']"
                          defaultValue={16}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Dan Wilson
                        </a>
                        <div className="fw-bold text-muted">
                          dam@consilting.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                </div>
                {/*end::Users*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-center mt-15">
                  <button
                    type="reset"
                    id="kt_modal_users_search_reset"
                    data-bs-dismiss="modal"
                    className="btn btn-active-light me-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="kt_modal_users_search_submit"
                    className="btn btn-primary"
                  >
                    Add Selected Users
                  </button>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Results*/}
              {/*begin::Empty*/}
              <div
                data-kt-search-element="empty"
                className="text-center d-none"
              >
                {/*begin::Message*/}
                <div className="fw-bold py-10">
                  <div className="text-gray-600 fs-3 mb-2">No users found</div>
                  <div className="text-muted fs-6">
                    Try to search by username, full name or email...
                  </div>
                </div>
                {/*end::Message*/}
                {/*begin::Illustration*/}
                <div className="text-center px-5">
                  <img
                    src="assets/media/illustrations/sketchy-1/1.png"
                    alt=""
                    className="w-100 h-200px h-sm-325px"
                  />
                </div>
                {/*end::Illustration*/}
              </div>
              {/*end::Empty*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Search*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Users Search*/}
  {/*end::Modals*/}
  {/*begin::Javascript*/}
  {/*begin::Global Javascript Bundle(used by all pages)*/}
  {/*end::Global Javascript Bundle*/}
  {/*begin::Page Vendors Javascript(used by this page)*/}
  {/*end::Page Vendors Javascript*/}
  {/*begin::Page Custom Javascript(used by this page)*/}
</>


);
}

export default Biddingcontent;