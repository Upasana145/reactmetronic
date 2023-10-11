import React from 'react'

const Socialcontent = () => {
  return (
    <div>

<>
  {/*begin::Wrapper*/}
  <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    {/*begin::Content*/}
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
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
              Social Dashboard
            </h1>
            {/*end::Title*/}
          </div>
          {/*end::Page title*/}
          {/*begin::Actions*/}
          <div className="d-flex align-items-center gap-2 gap-lg-3">
            {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
            <div
              data-kt-daterangepicker="true"
              data-kt-daterangepicker-opens="left"
              className="btn btn-sm btn-light d-flex align-items-center px-4"
            >
              {/*begin::Display range*/}
              <div className="text-gray-600 fw-bolder">
                Loading date range...
              </div>
              {/*end::Display range*/}
              {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
              <span className="svg-icon svg-icon-1 ms-2 me-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Daterangepicker*/}
            {/*begin::Secondary button*/}
            {/*end::Secondary button*/}
            {/*begin::Primary button*/}
            <a
              href="../../demo1/dist/apps/ecommerce/sales/details.html"
              className="btn btn-sm btn-primary"
            >
              Show
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
          {/*begin::Row*/}
          <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
            {/*begin::Col*/}
            <div className="col-xl-8">
              {/*begin::Chart Widget 1*/}
              <div className="card card-flush h-lg-100">
                {/*begin::Header*/}
                <div className="card-header pt-5">
                  {/*begin::Title*/}
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark">
                      Instagram Subscribers
                    </span>
                    <span className="text-gray-400 pt-2 fw-bold fs-6">
                      75% activity growth
                    </span>
                  </h3>
                  {/*end::Title*/}
                  {/*begin::Toolbar*/}
                  <div className="card-toolbar">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
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
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
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
                    {/*end::Menu*/}
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div className="card-body pt-0 px-0">
                  {/*begin::Chart*/}
                  <div
                    id="kt_charts_widget_1"
                    className="min-h-auto ps-4 pe-6 mb-3"
                    style={{ height: 350 }}
                  />
                  {/*end::Chart*/}
                  {/*begin::Info*/}
                  <div className="d-flex align-items-center px-9">
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center me-6">
                      {/*begin::Bullet*/}
                      <span className="rounded-1 bg-primary me-2 h-10px w-10px" />
                      {/*end::Bullet*/}
                      {/*begin::Label*/}
                      <span className="fw-bold fs-6 text-gray-600">Gained</span>
                      {/*end::Label*/}
                    </div>
                    {/*ed::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Bullet*/}
                      <span className="rounded-1 bg-success me-2 h-10px w-10px" />
                      {/*end::Bullet*/}
                      {/*begin::Label*/}
                      <span className="fw-bold fs-6 text-gray-600">Lost</span>
                      {/*end::Label*/}
                    </div>
                    {/*ed::Item*/}
                  </div>
                  {/*ed::Info*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Chart Widget 1*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-xl-4">
              {/*begin::Engage widget 1*/}
              <div className="card h-md-100">
                {/*begin::Body*/}
                <div className="card-body d-flex flex-column flex-center">
                  {/*begin::Heading*/}
                  <div className="mb-2">
                    {/*begin::Title*/}
                    <h1 className="fw-bold text-gray-800 text-center lh-lg">
                      Have you tried
                      <br />
                      new
                      <span className="fw-boldest">Mobile Application ?</span>
                    </h1>
                    {/*end::Title*/}
                    {/*begin::Illustration*/}
                    <div
                      className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px my-5 my-lg-12"
                      style={{
                        backgroundImage:
                          'url("assets/media/svg/illustrations/easy/1.svg")'
                      }}
                    />
                    {/*end::Illustration*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Links*/}
                  <div className="text-center mb-1">
                    {/*begin::Link*/}
                    <a
                      className="btn btn-sm btn-primary me-2"
                      data-bs-target="#kt_modal_create_app"
                      data-bs-toggle="modal"
                    >
                      Try now
                    </a>
                    {/*end::Link*/}
                    {/*begin::Link*/}
                    <a
                      className="btn btn-sm btn-light"
                      href="../../demo1/dist/pages/user-profile/activity.html"
                    >
                      Learn more
                    </a>
                    {/*end::Link*/}
                  </div>
                  {/*end::Links*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Engage widget 1*/}
            </div>
            {/*end::Col*/}
          </div>
          {/*end::Row*/}
          {/*begin::Row*/}
          <div className="row g-5 g-xl-10">
            {/*begin::Col*/}
            <div className="col-sm-6 col-xl-2 mb-xl-10">
              {/*begin::Card widget 2*/}
              <div className="card h-lg-100">
                {/*begin::Body*/}
                <div className="card-body d-flex justify-content-between align-items-start flex-column">
                  {/*begin::Icon*/}
                  <div className="m-0">
                    <img
                      src="assets/media/svg/brand-logos/instagram-2-1.svg"
                      className="w-35px"
                      alt=""
                    />
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Section*/}
                  <div className="d-flex flex-column my-7">
                    {/*begin::Number*/}
                    <span className="fw-bold fs-3x text-gray-800 lh-1 ls-n2">
                      320k
                    </span>
                    {/*end::Number*/}
                    {/*begin::Follower*/}
                    <div className="m-0">
                      <span className="fw-bold fs-6 text-gray-400">
                        Followers
                      </span>
                    </div>
                    {/*end::Follower*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Badge*/}
                  <span className="badge badge-success fs-base">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                    <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
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
                    {/*end::Svg Icon*/}2.1%
                  </span>
                  {/*end::Badge*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Card widget 2*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-sm-6 col-xl-2 mb-xl-10">
              {/*begin::Card widget 2*/}
              <div className="card h-lg-100">
                {/*begin::Body*/}
                <div className="card-body d-flex justify-content-between align-items-start flex-column">
                  {/*begin::Icon*/}
                  <div className="m-0">
                    <img
                      src="assets/media/svg/brand-logos/facebook-3.svg"
                      className="w-35px"
                      alt=""
                    />
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Section*/}
                  <div className="d-flex flex-column my-7">
                    {/*begin::Number*/}
                    <span className="fw-bold fs-3x text-gray-800 lh-1 ls-n2">
                      1.5M
                    </span>
                    {/*end::Number*/}
                    {/*begin::Follower*/}
                    <div className="m-0">
                      <span className="fw-bold fs-6 text-gray-400">
                        Followers
                      </span>
                    </div>
                    {/*end::Follower*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Badge*/}
                  <span className="badge badge-danger fs-base">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                    <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
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
                    {/*end::Svg Icon*/}0.47%
                  </span>
                  {/*end::Badge*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Card widget 2*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-sm-6 col-xl-2 mb-xl-10">
              {/*begin::Card widget 2*/}
              <div className="card h-lg-100">
                {/*begin::Body*/}
                <div className="card-body d-flex justify-content-between align-items-start flex-column">
                  {/*begin::Icon*/}
                  <div className="m-0">
                    <img
                      src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                      className="w-35px"
                      alt=""
                    />
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Section*/}
                  <div className="d-flex flex-column my-7">
                    {/*begin::Number*/}
                    <span className="fw-bold fs-3x text-gray-800 lh-1 ls-n2">
                      84k
                    </span>
                    {/*end::Number*/}
                    {/*begin::Follower*/}
                    <div className="m-0">
                      <span className="fw-bold fs-6 text-gray-400">
                        Followers
                      </span>
                    </div>
                    {/*end::Follower*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Badge*/}
                  <span className="badge badge-success fs-base">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                    <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
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
                    {/*end::Svg Icon*/}0.6%
                  </span>
                  {/*end::Badge*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Card widget 2*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-sm-6 col-xl-2 mb-xl-10">
              {/*begin::Card widget 2*/}
              <div className="card h-lg-100">
                {/*begin::Body*/}
                <div className="card-body d-flex justify-content-between align-items-start flex-column">
                  {/*begin::Icon*/}
                  <div className="m-0">
                    <img
                      src="assets/media/svg/brand-logos/twitter.svg"
                      className="w-35px"
                      alt=""
                    />
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Section*/}
                  <div className="d-flex flex-column my-7">
                    {/*begin::Number*/}
                    <span className="fw-bold fs-3x text-gray-800 lh-1 ls-n2">
                      570k
                    </span>
                    {/*end::Number*/}
                    {/*begin::Follower*/}
                    <div className="m-0">
                      <span className="fw-bold fs-6 text-gray-400">
                        Followers
                      </span>
                    </div>
                    {/*end::Follower*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Badge*/}
                  <span className="badge badge-success fs-base">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                    <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
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
                    {/*end::Svg Icon*/}3%
                  </span>
                  {/*end::Badge*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Card widget 2*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-xl-4 mb-5 mb-xl-10">
              {/*begin::Card widget 1*/}
              <div
                className="card card-flush border-0 h-lg-100"
                style={{ backgroundColor: "#7239EA" }}
              >
                {/*begin::Header*/}
                <div className="card-header pt-2">
                  {/*begin::Title*/}
                  <h3 className="card-title">
                    <span className="text-white fs-3 fw-bolder me-2">
                      Facebook Campaign
                    </span>
                    <span className="badge badge-success">Active</span>
                  </h3>
                  {/*end::Title*/}
                  {/*begin::Toolbar*/}
                  <div className="card-toolbar">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon bg-white bg-opacity-10 btn-color-white btn-active-success w-25px h-25px"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                      <span className="svg-icon svg-icon-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                            fill="currentColor"
                          />
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
                    {/*end::Menu*/}
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div className="card-body d-flex justify-content-between flex-column pt-1 px-0 pb-0">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-wrap px-9 mb-5">
                    {/*begin::Stat*/}
                    <div
                      className="rounded min-w-125px py-3 px-4 my-1 me-6"
                      style={{ border: "1px dashed rgba(255, 255, 255, 0.2)" }}
                    >
                      {/*begin::Number*/}
                      <div className="d-flex align-items-center">
                        <div
                          className="text-white fs-2 fw-bolder"
                          data-kt-countup="true"
                          data-kt-countup-value={4368}
                          data-kt-countup-prefix="$"
                        >
                          0
                        </div>
                      </div>
                      {/*end::Number*/}
                      {/*begin::Label*/}
                      <div className="fw-bold fs-6 text-white opacity-50">
                        New Followers
                      </div>
                      {/*end::Label*/}
                    </div>
                    {/*end::Stat*/}
                    {/*begin::Stat*/}
                    <div
                      className="rounded min-w-125px py-3 px-4 my-1"
                      style={{ border: "1px dashed rgba(255, 255, 255, 0.2)" }}
                    >
                      {/*begin::Number*/}
                      <div className="d-flex align-items-center">
                        <div
                          className="text-white fs-2 fw-bolder"
                          data-kt-countup="true"
                          data-kt-countup-value="120,000"
                        >
                          0
                        </div>
                      </div>
                      {/*end::Number*/}
                      {/*begin::Label*/}
                      <div className="fw-bold fs-6 text-white opacity-50">
                        Followers Goal
                      </div>
                      {/*end::Label*/}
                    </div>
                    {/*end::Stat*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Chart*/}
                  <div
                    id="kt_card_widget_1_chart"
                    data-kt-chart-color="#8F5FF4"
                    style={{ height: 105 }}
                  />
                  {/*end::Chart*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Card widget 1*/}
            </div>
            {/*end::Col*/}
          </div>
          {/*end::Row*/}
          {/*begin::Row*/}
          <div className="row gy-5 g-xl-10">
            {/*begin::Col*/}
            <div className="col-xl-8 mb-xl-10">
              {/*begin::Timeline Widget 1*/}
              <div className="card card-flush h-xl-100">
                {/*begin::Card header*/}
                <div className="card-header pt-5">
                  {/*begin::Card title*/}
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark">
                      Team Schedule
                    </span>
                    <span className="text-gray-400 pt-2 fw-bold fs-6">
                      49 Acual Tasks
                    </span>
                  </h3>
                  {/*end::Card title*/}
                  {/*begin::Card toolbar*/}
                  <div className="card-toolbar">
                    {/*begin::Tabs*/}
                    <ul className="nav">
                      <li className="nav-item">
                        <a
                          className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bolder px-4 me-1 active"
                          data-kt-timeline-widget-1="tab"
                          data-bs-toggle="tab"
                          href="#kt_timeline_widget_1_tab_day"
                        >
                          Day
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bolder px-4 me-1"
                          data-kt-timeline-widget-1="tab"
                          data-bs-toggle="tab"
                          href="#kt_timeline_widget_1_tab_week"
                        >
                          Week
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bolder px-4 me-1"
                          data-kt-timeline-widget-1="tab"
                          data-bs-toggle="tab"
                          href="#kt_timeline_widget_1_tab_month"
                        >
                          Month
                        </a>
                      </li>
                    </ul>
                    {/*end::Tabs*/}
                  </div>
                  {/*end::Card toolbar*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pb-0">
                  {/*begin::Tab content*/}
                  <div className="tab-content">
                    {/*begin::Tab pane*/}
                    <div
                      className="tab-pane active"
                      id="kt_timeline_widget_1_tab_day"
                      role="tabpanel"
                      aria-labelledby="day-tab"
                      data-kt-timeline-widget-1-blockui="true"
                    >
                      <div className="table-responsive pb-10">
                        {/*begin::Timeline*/}
                        <div
                          id="kt_timeline_widget_1_1"
                          className="vis-timeline-custom h-350px min-w-700px"
                          data-kt-timeline-widget-1-image-root="assets/media/"
                        />
                        {/*end::Timeline*/}
                      </div>
                    </div>
                    {/*end::Tab pane*/}
                    {/*begin::Tab pane*/}
                    <div
                      className="tab-pane"
                      id="kt_timeline_widget_1_tab_week"
                      role="tabpanel"
                      aria-labelledby="week-tab"
                      data-kt-timeline-widget-1-blockui="true"
                    >
                      <div className="table-responsive pb-10">
                        {/*begin::Timeline*/}
                        <div
                          id="kt_timeline_widget_1_2"
                          className="vis-timeline-custom h-350px min-w-700px"
                          data-kt-timeline-widget-1-image-root="assets/media/"
                        />
                        {/*end::Timeline*/}
                      </div>
                    </div>
                    {/*end::Tab pane*/}
                    {/*begin::Tab pane*/}
                    <div
                      className="tab-pane"
                      id="kt_timeline_widget_1_tab_month"
                      role="tabpanel"
                      aria-labelledby="month-tab"
                      data-kt-timeline-widget-1-blockui="true"
                    >
                      <div className="table-responsive pb-10">
                        {/*begin::Timeline*/}
                        <div
                          id="kt_timeline_widget_1_3"
                          className="vis-timeline-custom h-350px min-w-700px"
                          data-kt-timeline-widget-1-image-root="assets/media/"
                        />
                        {/*end::Timeline*/}
                      </div>
                    </div>
                    {/*end::Tab pane*/}
                  </div>
                  {/*end::Tab content*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Timeline Widget 1*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-xl-4 mb-5 mb-xl-10">
              {/*begin::List widget 4*/}
              <div className="card card-flush h-lg-100">
                {/*begin::Header*/}
                <div className="card-header pt-5">
                  {/*begin::Title*/}
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark">
                      Key Statistics
                    </span>
                    <span className="text-gray-400 mt-1 fw-bold fs-6">
                      Social activities overview
                    </span>
                  </h3>
                  {/*end::Title*/}
                  {/*begin::Toolbar*/}
                  <div className="card-toolbar">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
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
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
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
                    {/*end::Menu*/}
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div className="card-body pt-9 pb-5">
                  {/*begin::Slider*/}
                  <div className="tns">
                    {/*begin::Slider wrapper*/}
                    <div
                      data-tns="true"
                      data-tns-nav-position="bottom"
                      data-tns-controls="false"
                    >
                      {/*begin::Slide*/}
                      <div className="mb-3">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              6.3k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Likes
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              2.1k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Comments
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "45%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              650
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Shares
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Slide*/}
                      {/*begin::Slide*/}
                      <div className="mb-3">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              3.4k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Comments
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "45%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              7.1k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Likes
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              345
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Shares
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Slide*/}
                      {/*begin::Slide*/}
                      <div className="mb-3">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              650
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Shares
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              3.5k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Comments
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "45%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              7.5k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Likes
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Slide*/}
                      {/*begin::Slide*/}
                      <div className="mb-3">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              9.1k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Likes
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              4.2k
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Comments
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "45%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="m-0">
                            <span className="text-gray-800 fw-bolder d-block fs-2hx lh-1 ls-n2">
                              450
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              Avarage
                              <br />
                              Shares
                            </span>
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                            {/*begin::Select*/}
                            <div className="mb-2">
                              <select
                                className="form-select form-select-transparent p-0 w-150px me-n5"
                                data-control="select2"
                                data-placeholder="All Users"
                                data-dropdown-css-class="w-150px"
                                data-hide-search="true"
                              >
                                <option value={1} selected="selected">
                                  Jul 22 - Aug 22
                                </option>
                                <option value={2}>Jul 24 - Aug 24</option>
                                <option value={3}>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/*end::Select*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px w-100 bg-light">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Slide*/}
                    </div>
                    {/*end::Slider wrapper*/}
                  </div>
                  {/*end::Slider*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::List widget 4*/}
            </div>
            {/*end::Col*/}
          </div>
          {/*end::Row*/}
          {/*begin::Row*/}
          <div className="row gy-5 g-xl-10">
            {/*begin::Col*/}
            <div className="col-xl-8">
              {/*begin::Table Widget 3*/}
              <div className="card card-flush h-lg-100">
                {/*begin::Card header*/}
                <div className="card-header py-7">
                  {/*begin::Tabs*/}
                  <div
                    className="card-title pt-3 mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0"
                    data-kt-table-widget-3="tabs_nav"
                  >
                    {/*begin::Tab item*/}
                    <div
                      className="fs-4 fw-bolder pb-3 border-bottom border-3 border-primary cursor-pointer"
                      data-kt-table-widget-3="tab"
                      data-kt-table-widget-3-value="Show All"
                    >
                      All Campaigns (47)
                    </div>
                    {/*end::Tab item*/}
                    {/*begin::Tab item*/}
                    <div
                      className="fs-4 fw-bolder text-muted pb-3 cursor-pointer"
                      data-kt-table-widget-3="tab"
                      data-kt-table-widget-3-value="Pending"
                    >
                      Pending (8)
                    </div>
                    {/*end::Tab item*/}
                    {/*begin::Tab item*/}
                    <div
                      className="fs-4 fw-bolder text-muted pb-3 cursor-pointer"
                      data-kt-table-widget-3="tab"
                      data-kt-table-widget-3-value="Completed"
                    >
                      Completed (39)
                    </div>
                    {/*end::Tab item*/}
                  </div>
                  {/*end::Tabs*/}
                  {/*begin::Create campaign button*/}
                  <div className="card-toolbar">
                    <a
                      href="#"
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_campaign"
                    >
                      Create Campaign
                    </a>
                  </div>
                  {/*end::Create campaign button*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-1">
                  {/*begin::Sort & Filter*/}
                  <div className="d-flex flex-stack flex-wrap gap-4">
                    {/*begin::Sort*/}
                    <div className="d-flex align-items-center flex-wrap gap-3 gap-xl-9">
                      {/*begin::Type*/}
                      <div className="d-flex align-items-center fw-bolder">
                        {/*begin::Label*/}
                        <div className="text-muted fs-7">Type</div>
                        {/*end::Label*/}
                        {/*begin::Select*/}
                        <select
                          className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto"
                          data-hide-search="true"
                          data-control="select2"
                          data-dropdown-css-class="w-150px"
                          data-placeholder="Select an option"
                        >
                          <option />
                          <option value="Show All" selected="selected">
                            Show All
                          </option>
                          <option value="Newest">Newest</option>
                          <option value="oldest">Oldest</option>
                        </select>
                        {/*end::Select*/}
                      </div>
                      {/*end::Type*/}
                      {/*begin::Status*/}
                      <div className="d-flex align-items-center fw-bolder">
                        {/*begin::Label*/}
                        <div className="text-muted fs-7 me-2">Status</div>
                        {/*end::Label*/}
                        {/*begin::Select*/}
                        <select
                          className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto"
                          data-hide-search="true"
                          data-control="select2"
                          data-dropdown-css-class="w-150px"
                          data-placeholder="Select an option"
                          data-kt-table-widget-3="filter_status"
                        >
                          <option />
                          <option value="Show All" selected="selected">
                            Show All
                          </option>
                          <option value="Live Now">Live Now</option>
                          <option value="Reviewing">Reviewing</option>
                          <option value="Paused">Paused</option>
                        </select>
                        {/*end::Select*/}
                      </div>
                      {/*begin::Status*/}
                      {/*begin::Budget*/}
                      <div className="d-flex align-items-center fw-bolder">
                        {/*begin::Label*/}
                        <div className="text-muted me-2">Budget</div>
                        {/*end::Label*/}
                        {/*begin::Select*/}
                        <select
                          className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto"
                          data-hide-search="true"
                          data-dropdown-css-class="w-150px"
                          data-control="select2"
                          data-placeholder="Select an option"
                          data-kt-table-widget-3="filter_status"
                        >
                          <option />
                          <option value="Show All" selected="selected">
                            Show All
                          </option>
                          <option value="<5000">Less than $5,000</option>
                          <option value="5000-10000">$5,001 - $10,000</option>
                          <option value=">10000">More than $10,001</option>
                        </select>
                        {/*end::Select*/}
                      </div>
                      {/*begin::Budget*/}
                    </div>
                    {/*end::Sort*/}
                    {/*begin::Filter*/}
                    <div className="d-flex align-items-center gap-4">
                      {/*begin::Filter button*/}
                      <a
                        href="#"
                        className="text-hover-primary ps-4"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-400">
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
                        {/*end::Svg Icon*/}
                      </a>
                      {/*begin::Menu 1*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        id="kt_menu_6244460e3416a"
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
                            <label className="form-label fw-bold">
                              Status:
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-placeholder="Select option"
                                data-dropdown-parent="#kt_menu_6244460e3416a"
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
                                <span className="form-check-label">
                                  Customer
                                </span>
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
                              <label className="form-check-label">
                                Enabled
                              </label>
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
                      {/*end::Filter button*/}
                    </div>
                    {/*end::Filter*/}
                  </div>
                  {/*end::Sort & Filter*/}
                  {/*begin::Seprator*/}
                  <div className="separator separator-dashed my-5" />
                  {/*end::Seprator*/}
                  {/*begin::Table*/}
                  <table
                    id="kt_widget_table_3"
                    className="table table-row-dashed align-middle fs-6 gy-4 my-0 pb-3"
                    data-kt-table-widget-3="all"
                  >
                    <thead className="d-none">
                      <tr>
                        <th>Campaign</th>
                        <th>Platforms</th>
                        <th>Status</th>
                        <th>Team</th>
                        <th>Date</th>
                        <th>Progress</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="min-w-175px">
                          <div className="position-relative ps-6 pe-3 py-2">
                            <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info" />
                            <a
                              href="#"
                              className="mb-1 text-dark text-hover-primary fw-bolder"
                            >
                              Happy Christmas
                            </a>
                            <div className="fs-7 text-muted fw-bolder">
                              Created on 24 Dec 21
                            </div>
                          </div>
                        </td>
                        <td>
                          {/*begin::Icons*/}
                          <div className="d-flex gap-2 mb-2">
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/facebook-4.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/twitter-2.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/linkedin-2.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/youtube-3.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                          </div>
                          {/*end::Icons*/}
                          <div className="fs-7 text-muted fw-bolder">
                            Labor 24 - 35 years
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-success">
                            Live Now
                          </span>
                        </td>
                        <td className="min-w-125px">
                          {/*begin::Team members*/}
                          <div className="symbol-group symbol-hover mb-1">
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-6.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-5.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-25.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-9.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label bg-light-danger">
                                <span className="fs-7 text-danger">E</span>
                              </div>
                            </div>
                            {/*end::Member*/}
                            {/*begin::More members*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label bg-dark">
                                <span className="fs-9 text-white">+0</span>
                              </div>
                            </div>
                            {/*end::More members*/}
                          </div>
                          {/*end::Team members*/}
                          <div className="fs-7 fw-bolder text-muted">
                            Team Members
                          </div>
                        </td>
                        <td className="min-w-150px">
                          <div className="mb-2 fw-bolder">
                            24 Dec 21 - 06 Jan 22
                          </div>
                          <div className="fs-7 fw-bolder text-muted">
                            Date range
                          </div>
                        </td>
                        <td className="d-none">Pending</td>
                        <td className="text-end">
                          <button
                            type="button"
                            className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="min-w-175px">
                          <div className="position-relative ps-6 pe-3 py-2">
                            <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-warning" />
                            <a
                              href="#"
                              className="mb-1 text-dark text-hover-primary fw-bolder"
                            >
                              Halloween
                            </a>
                            <div className="fs-7 text-muted fw-bolder">
                              Created on 24 Dec 21
                            </div>
                          </div>
                        </td>
                        <td>
                          {/*begin::Icons*/}
                          <div className="d-flex gap-2 mb-2">
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/twitter-2.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/instagram-2-1.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/youtube-3.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                          </div>
                          {/*end::Icons*/}
                          <div className="fs-7 text-muted fw-bolder">
                            Labor 37 - 52 years
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-primary">
                            Reviewing
                          </span>
                        </td>
                        <td className="min-w-125px">
                          {/*begin::Team members*/}
                          <div className="symbol-group symbol-hover mb-1">
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-1.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-25.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-6.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                          </div>
                          {/*end::Team members*/}
                          <div className="fs-7 fw-bolder text-muted">
                            Team Members
                          </div>
                        </td>
                        <td className="min-w-150px">
                          <div className="mb-2 fw-bolder">
                            03 Feb 22 - 14 Feb 22
                          </div>
                          <div className="fs-7 fw-bolder text-muted">
                            Date range
                          </div>
                        </td>
                        <td className="d-none">Completed</td>
                        <td className="text-end">
                          <button
                            type="button"
                            className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="min-w-175px">
                          <div className="position-relative ps-6 pe-3 py-2">
                            <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success" />
                            <a
                              href="#"
                              className="mb-1 text-dark text-hover-primary fw-bolder"
                            >
                              Cyber Monday
                            </a>
                            <div className="fs-7 text-muted fw-bolder">
                              Created on 24 Dec 21
                            </div>
                          </div>
                        </td>
                        <td>
                          {/*begin::Icons*/}
                          <div className="d-flex gap-2 mb-2">
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/facebook-4.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/instagram-2-1.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                          </div>
                          {/*end::Icons*/}
                          <div className="fs-7 text-muted fw-bolder">
                            Labor 24 - 38 years
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-success">
                            Live Now
                          </span>
                        </td>
                        <td className="min-w-125px">
                          {/*begin::Team members*/}
                          <div className="symbol-group symbol-hover mb-1">
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label bg-light-danger">
                                <span className="fs-7 text-danger">M</span>
                              </div>
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-6.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label bg-light-primary">
                                <span className="fs-7 text-primary">N</span>
                              </div>
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-13.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                          </div>
                          {/*end::Team members*/}
                          <div className="fs-7 fw-bolder text-muted">
                            Team Members
                          </div>
                        </td>
                        <td className="min-w-150px">
                          <div className="mb-2 fw-bolder">
                            19 Mar 22 - 04 Apr 22
                          </div>
                          <div className="fs-7 fw-bolder text-muted">
                            Date range
                          </div>
                        </td>
                        <td className="d-none">Pending</td>
                        <td className="text-end">
                          <button
                            type="button"
                            className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="min-w-175px">
                          <div className="position-relative ps-6 pe-3 py-2">
                            <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-danger" />
                            <a
                              href="#"
                              className="mb-1 text-dark text-hover-primary fw-bolder"
                            >
                              Thanksgiving
                            </a>
                            <div className="fs-7 text-muted fw-bolder">
                              Created on 24 Dec 21
                            </div>
                          </div>
                        </td>
                        <td>
                          {/*begin::Icons*/}
                          <div className="d-flex gap-2 mb-2">
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/twitter-2.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/instagram-2-1.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/linkedin-2.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                          </div>
                          {/*end::Icons*/}
                          <div className="fs-7 text-muted fw-bolder">
                            Labor 24 - 38 years
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-warning">
                            Paused
                          </span>
                        </td>
                        <td className="min-w-125px">
                          {/*begin::Team members*/}
                          <div className="symbol-group symbol-hover mb-1">
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-6.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-25.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-1.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label bg-light-primary">
                                <span className="fs-7 text-primary">N</span>
                              </div>
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-5.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::More members*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label bg-dark">
                                <span className="fs-9 text-white">+0</span>
                              </div>
                            </div>
                            {/*end::More members*/}
                          </div>
                          {/*end::Team members*/}
                          <div className="fs-7 fw-bolder text-muted">
                            Team Members
                          </div>
                        </td>
                        <td className="min-w-150px">
                          <div className="mb-2 fw-bolder">
                            20 Jun 22 - 30 Jun 22
                          </div>
                          <div className="fs-7 fw-bolder text-muted">
                            Date range
                          </div>
                        </td>
                        <td className="d-none">Pending</td>
                        <td className="text-end">
                          <button
                            type="button"
                            className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="min-w-175px">
                          <div className="position-relative ps-6 pe-3 py-2">
                            <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-primary" />
                            <a
                              href="#"
                              className="mb-1 text-dark text-hover-primary fw-bolder"
                            >
                              Happy Mother's Day
                            </a>
                            <div className="fs-7 text-muted fw-bolder">
                              Created on 24 Dec 21
                            </div>
                          </div>
                        </td>
                        <td>
                          {/*begin::Icons*/}
                          <div className="d-flex gap-2 mb-2">
                            <a href="#">
                              <img
                                src="assets/media/svg/brand-logos/youtube-3.svg"
                                className="w-20px"
                                alt=""
                              />
                            </a>
                          </div>
                          {/*end::Icons*/}
                          <div className="fs-7 text-muted fw-bolder">
                            Labor 30 - 40 years
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-warning">
                            Paused
                          </span>
                        </td>
                        <td className="min-w-125px">
                          {/*begin::Team members*/}
                          <div className="symbol-group symbol-hover mb-1">
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-23.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                            {/*begin::Member*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-13.jpg"
                                alt=""
                              />
                            </div>
                            {/*end::Member*/}
                          </div>
                          {/*end::Team members*/}
                          <div className="fs-7 fw-bolder text-muted">
                            Team Members
                          </div>
                        </td>
                        <td className="min-w-150px">
                          <div className="mb-2 fw-bolder">
                            01 Aug 22 - 01 Sep 22
                          </div>
                          <div className="fs-7 fw-bolder text-muted">
                            Date range
                          </div>
                        </td>
                        <td className="d-none">Completed</td>
                        <td className="text-end">
                          <button
                            type="button"
                            className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/*end::Table*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Table Widget 3*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-xl-4">
              {/*begin::Chart widget 2*/}
              <div className="card card-flush h-lg-100">
                {/*begin::Header*/}
                <div className="card-header pt-5 mb-7">
                  {/*begin::Title*/}
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark">
                      Notable Channels
                    </span>
                    <span className="text-gray-400 mt-1 fw-bold fs-6">
                      Social networks overview
                    </span>
                  </h3>
                  {/*end::Title*/}
                  {/*begin::Toolbar*/}
                  <div className="card-toolbar">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
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
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
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
                    {/*end::Menu*/}
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div className="card-body d-flex justify-content-between flex-column p-0">
                  {/*begin::Items*/}
                  <div className="mb-5 px-9">
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-3">
                        {/*begin::Icon*/}
                        <img
                          src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                          className="me-3 w-30px"
                          alt=""
                        />
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0"
                          >
                            Dribbble
                          </a>
                          <span className="text-gray-400 fw-bold d-block fs-6">
                            Community
                          </span>
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Statistics*/}
                      <div className="d-flex align-items-center w-100 mw-125px">
                        {/*begin::Progress*/}
                        <div className="progress h-6px w-100 me-2 bg-light-success">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow={65}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        {/*end::Progress*/}
                        {/*begin::Value*/}
                        <span className="text-gray-400 fw-bold">65%</span>
                        {/*end::Value*/}
                      </div>
                      {/*end::Statistics*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-4" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-3">
                        {/*begin::Icon*/}
                        <img
                          src="assets/media/svg/brand-logos/instagram-2-1.svg"
                          className="me-3 w-30px"
                          alt=""
                        />
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0"
                          >
                            Linked In
                          </a>
                          <span className="text-gray-400 fw-bold d-block fs-6">
                            Social Media
                          </span>
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Statistics*/}
                      <div className="d-flex align-items-center w-100 mw-125px">
                        {/*begin::Progress*/}
                        <div className="progress h-6px w-100 me-2 bg-light-warning">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "87%" }}
                            aria-valuenow={87}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        {/*end::Progress*/}
                        {/*begin::Value*/}
                        <span className="text-gray-400 fw-bold">87%</span>
                        {/*end::Value*/}
                      </div>
                      {/*end::Statistics*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-4" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-3">
                        {/*begin::Icon*/}
                        <img
                          src="assets/media/svg/brand-logos/slack-icon.svg"
                          className="me-3 w-30px"
                          alt=""
                        />
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0"
                          >
                            Slack
                          </a>
                          <span className="text-gray-400 fw-bold d-block fs-6">
                            Messanger
                          </span>
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Statistics*/}
                      <div className="d-flex align-items-center w-100 mw-125px">
                        {/*begin::Progress*/}
                        <div className="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "44%" }}
                            aria-valuenow={44}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        {/*end::Progress*/}
                        {/*begin::Value*/}
                        <span className="text-gray-400 fw-bold">44%</span>
                        {/*end::Value*/}
                      </div>
                      {/*end::Statistics*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-4" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-3">
                        {/*begin::Icon*/}
                        <img
                          src="assets/media/svg/brand-logos/google-icon.svg"
                          className="me-3 w-30px"
                          alt=""
                        />
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0"
                          >
                            Google
                          </a>
                          <span className="text-gray-400 fw-bold d-block fs-6">
                            SEO &amp; PPC
                          </span>
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Statistics*/}
                      <div className="d-flex align-items-center w-100 mw-125px">
                        {/*begin::Progress*/}
                        <div className="progress h-6px w-100 me-2 bg-light-info">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        {/*end::Progress*/}
                        {/*begin::Value*/}
                        <span className="text-gray-400 fw-bold">70%</span>
                        {/*end::Value*/}
                      </div>
                      {/*end::Statistics*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-4" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-3">
                        {/*begin::Icon*/}
                        <img
                          src="assets/media/svg/brand-logos/invision.svg"
                          className="me-3 w-30px"
                          alt=""
                        />
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0"
                          >
                            inVision
                          </a>
                          <span className="text-gray-400 fw-bold d-block fs-6">
                            Collaboration
                          </span>
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Statistics*/}
                      <div className="d-flex align-items-center w-100 mw-125px">
                        {/*begin::Progress*/}
                        <div className="progress h-6px w-100 me-2 bg-light-danger">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "56%" }}
                            aria-valuenow={56}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        {/*end::Progress*/}
                        {/*begin::Value*/}
                        <span className="text-gray-400 fw-bold">56%</span>
                        {/*end::Value*/}
                      </div>
                      {/*end::Statistics*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Separator*/}
                    <div className="separator separator-dashed my-4" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-3">
                        {/*begin::Icon*/}
                        <img
                          src="assets/media/svg/brand-logos/facebook-3.svg"
                          className="me-3 w-30px"
                          alt=""
                        />
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-5 fw-bolder lh-0"
                          >
                            Facebook
                          </a>
                          <span className="text-gray-400 fw-bold d-block fs-6">
                            Social Network
                          </span>
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Statistics*/}
                      <div className="d-flex align-items-center w-100 mw-125px">
                        {/*begin::Progress*/}
                        <div className="progress h-6px w-100 me-2 bg-light-success">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "82%" }}
                            aria-valuenow={82}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        {/*end::Progress*/}
                        {/*begin::Value*/}
                        <span className="text-gray-400 fw-bold">82%</span>
                        {/*end::Value*/}
                      </div>
                      {/*end::Statistics*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                  {/*end::Items*/}
                  {/*begin::Chart*/}
                  <div
                    className="charts-widget-2 card-rounded-bottom"
                    data-kt-chart-color="primary"
                    style={{ height: 90 }}
                  />
                  {/*end::Chart*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Chart widget 2*/}
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
    {/*begin::Footer*/}
    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
      {/*begin::Container*/}
      <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/*begin::Copyright*/}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-bold me-1">2022©</span>
          <a
            href="https://keenthemes.com"
            target="_blank"
            className="text-gray-800 text-hover-primary"
          >
            Keenthemes
          </a>
        </div>
        {/*end::Copyright*/}
        {/*begin::Menu*/}
        <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
          <li className="menu-item">
            <a
              href="https://keenthemes.com"
              target="_blank"
              className="menu-link px-2"
            >
              About
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://devs.keenthemes.com"
              target="_blank"
              className="menu-link px-2"
            >
              Support
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://1.envato.market/EA4JP"
              target="_blank"
              className="menu-link px-2"
            >
              Purchase
            </a>
          </li>
        </ul>
        {/*end::Menu*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::Footer*/}
  </div>
  {/*end::Wrapper*/}
</>

      
    </div>
  )
}

export default Socialcontent
