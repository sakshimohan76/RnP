import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary-800">
          <ul className="space-y-2 font-medium">
            {/* Dashboard Start */}
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="currentcolor"
                >
                  <path d="M13.2897 14.6978L9.76636 11.1738C9.52348 10.9223 9.38909 10.5855 9.39213 10.2359C9.39517 9.88632 9.53539 9.55191 9.7826 9.30469C10.0298 9.05748 10.3642 8.91726 10.7138 8.91422C11.0634 8.91118 11.4002 9.04558 11.6517 9.28845L15.0777 12.7145C15.9071 12.2648 16.8687 12.1227 17.7926 12.3134C18.7166 12.504 19.5434 13.0151 20.127 13.7564C20.7106 14.4976 21.0135 15.4213 20.982 16.3642C20.9506 17.307 20.5869 18.2085 19.9552 18.9092C19.3235 19.6099 18.4644 20.0648 17.5299 20.1935C16.5953 20.3221 15.6452 20.1164 14.8477 19.6124C14.0501 19.1085 13.4563 18.3389 13.1713 17.4396C12.8862 16.5403 12.9281 15.5692 13.2897 14.6978ZM16.985 30.8978C8.88503 30.8978 2.31836 24.3311 2.31836 16.2311C2.31836 8.13112 8.88503 1.56445 16.985 1.56445C25.085 1.56445 31.6517 8.13112 31.6517 16.2311C31.6517 24.3311 25.085 30.8978 16.985 30.8978ZM16.985 28.2311C23.6124 28.2311 28.985 22.8585 28.985 16.2311C28.985 9.60379 23.6124 4.23112 16.985 4.23112C10.3577 4.23112 4.98503 9.60379 4.98503 16.2311C4.98503 22.8585 10.3577 28.2311 16.985 28.2311ZM16.985 17.5645C17.3386 17.5645 17.6778 17.424 17.9278 17.1739C18.1779 16.9239 18.3184 16.5847 18.3184 16.2311C18.3184 15.8775 18.1779 15.5384 17.9278 15.2883C17.6778 15.0383 17.3386 14.8978 16.985 14.8978C16.6314 14.8978 16.2923 15.0383 16.0422 15.2883C15.7922 15.5384 15.6517 15.8775 15.6517 16.2311C15.6517 16.5847 15.7922 16.9239 16.0422 17.1739C16.2923 17.424 16.6314 17.5645 16.985 17.5645ZM15.6517 7.56445C15.6517 7.21083 15.7922 6.87169 16.0422 6.62164C16.2923 6.3716 16.6314 6.23112 16.985 6.23112C17.3386 6.23112 17.6778 6.3716 17.9278 6.62164C18.1779 6.87169 18.3184 7.21083 18.3184 7.56445V8.89779C18.3184 9.25141 18.1779 9.59055 17.9278 9.84059C17.6778 10.0906 17.3386 10.2311 16.985 10.2311C16.6314 10.2311 16.2923 10.0906 16.0422 9.84059C15.7922 9.59055 15.6517 9.25141 15.6517 8.89779V7.56445ZM8.31836 17.5645C7.96474 17.5645 7.6256 17.424 7.37555 17.1739C7.1255 16.9239 6.98503 16.5847 6.98503 16.2311C6.98503 15.8775 7.1255 15.5384 7.37555 15.2883C7.6256 15.0383 7.96474 14.8978 8.31836 14.8978H9.65169C10.0053 14.8978 10.3445 15.0383 10.5945 15.2883C10.8446 15.5384 10.985 15.8775 10.985 16.2311C10.985 16.5847 10.8446 16.9239 10.5945 17.1739C10.3445 17.424 10.0053 17.5645 9.65169 17.5645H8.31836ZM24.3184 17.5645C23.9647 17.5645 23.6256 17.424 23.3755 17.1739C23.1255 16.9239 22.985 16.5847 22.985 16.2311C22.985 15.8775 23.1255 15.5384 23.3755 15.2883C23.6256 15.0383 23.9647 14.8978 24.3184 14.8978H25.6517C26.0053 14.8978 26.3445 15.0383 26.5945 15.2883C26.8446 15.5384 26.985 15.8775 26.985 16.2311C26.985 16.5847 26.8446 16.9239 26.5945 17.1739C26.3445 17.424 26.0053 17.5645 25.6517 17.5645H24.3184ZM22.0424 9.28845C22.2938 9.04558 22.6306 8.91118 22.9802 8.91422C23.3298 8.91726 23.6642 9.05748 23.9115 9.30469C24.1587 9.55191 24.2989 9.88632 24.3019 10.2359C24.305 10.5855 24.1706 10.9223 23.9277 11.1738L22.985 12.1165C22.862 12.2438 22.7149 12.3454 22.5522 12.4153C22.3896 12.4851 22.2146 12.5219 22.0376 12.5235C21.8605 12.525 21.6849 12.4913 21.5211 12.4242C21.3572 12.3572 21.2084 12.2582 21.0832 12.133C20.958 12.0078 20.859 11.8589 20.7919 11.6951C20.7249 11.5312 20.6912 11.3556 20.6927 11.1786C20.6942 11.0015 20.731 10.8266 20.8009 10.6639C20.8708 10.5012 20.9723 10.3541 21.0997 10.2311L22.0424 9.28845Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            {/* Dashboard Start */}

            {/* Employee Start */}
            <li>
              <Link
                to="/employee"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="currentcolor"
                >
                  <path d="M17.2381 8.32499C17.2381 8.58749 17.2193 8.84687 17.185 9.10624C17.2037 8.96874 17.2225 8.82811 17.2412 8.69062C17.1725 9.19374 17.0381 9.68437 16.8443 10.1531C16.8975 10.0281 16.9506 9.90312 17.0006 9.78124C16.8006 10.25 16.5443 10.6906 16.235 11.0969C16.3162 10.9906 16.3975 10.8875 16.4787 10.7812C16.1756 11.1687 15.8256 11.5187 15.4381 11.8219C15.5443 11.7406 15.6475 11.6594 15.7537 11.5781C15.3506 11.8906 14.91 12.1469 14.4381 12.3437C14.5631 12.2906 14.6881 12.2375 14.81 12.1875C14.3412 12.3812 13.8506 12.5156 13.3475 12.5844C13.485 12.5656 13.6256 12.5469 13.7631 12.5281C13.2443 12.5969 12.7193 12.5969 12.2006 12.5281C12.3381 12.5469 12.4787 12.5656 12.6162 12.5844C12.1131 12.5156 11.6225 12.3812 11.1537 12.1875C11.2787 12.2406 11.4037 12.2937 11.5256 12.3437C11.0568 12.1437 10.6162 11.8875 10.21 11.5781C10.3162 11.6594 10.4193 11.7406 10.5256 11.8219C10.1381 11.5187 9.78808 11.1687 9.48496 10.7812C9.56621 10.8875 9.64746 10.9906 9.72871 11.0969C9.41621 10.6937 9.15996 10.2531 8.96308 9.78124C9.01621 9.90624 9.06933 10.0312 9.11933 10.1531C8.92558 9.68437 8.79121 9.19374 8.72246 8.69062C8.74121 8.82811 8.75996 8.96874 8.77871 9.10624C8.70996 8.58749 8.70996 8.06249 8.77871 7.54374C8.75996 7.68124 8.74121 7.82187 8.72246 7.95936C8.79121 7.45624 8.92558 6.96561 9.11933 6.49686C9.06621 6.62186 9.01308 6.74687 8.96308 6.86874C9.16308 6.39999 9.41933 5.95936 9.72871 5.55311C9.64746 5.65936 9.56621 5.76249 9.48496 5.86874C9.78808 5.48124 10.1381 5.13124 10.5256 4.82812C10.4193 4.90937 10.3162 4.99061 10.21 5.07187C10.6131 4.75937 11.0537 4.50312 11.5256 4.30624C11.4006 4.35937 11.2756 4.41249 11.1537 4.46249C11.6225 4.26874 12.1131 4.13437 12.6162 4.06562C12.4787 4.08437 12.3381 4.10312 12.2006 4.12187C12.7193 4.05312 13.2443 4.05312 13.7631 4.12187C13.6256 4.10312 13.485 4.08437 13.3475 4.06562C13.8506 4.13437 14.3412 4.26874 14.81 4.46249C14.685 4.40937 14.56 4.35624 14.4381 4.30624C14.9068 4.50624 15.3475 4.76249 15.7537 5.07187C15.6475 4.99061 15.5443 4.90937 15.4381 4.82812C15.8256 5.13124 16.1756 5.48124 16.4787 5.86874C16.3975 5.76249 16.3162 5.65936 16.235 5.55311C16.5475 5.95624 16.8037 6.39686 17.0006 6.86874C16.9475 6.74374 16.8943 6.61874 16.8443 6.49686C17.0381 6.96561 17.1725 7.45624 17.2412 7.95936C17.2225 7.82187 17.2037 7.68124 17.185 7.54374C17.2193 7.80311 17.235 8.06249 17.2381 8.32499C17.2381 8.72811 17.41 9.14686 17.6943 9.43124C17.9662 9.70312 18.41 9.90624 18.8006 9.88749C19.2037 9.86874 19.6225 9.73749 19.9068 9.43124C20.1881 9.12499 20.3662 8.74999 20.3631 8.32499C20.36 7.57811 20.2506 6.80624 20.0193 6.09687C19.7943 5.40937 19.4818 4.73124 19.0568 4.14374C18.8131 3.80312 18.5537 3.46874 18.26 3.16874C17.9693 2.87187 17.6475 2.61874 17.3162 2.36562C16.7381 1.92812 16.0912 1.61249 15.4131 1.36249C14.7131 1.10312 13.9506 0.98124 13.2068 0.953115C12.885 0.940615 12.5662 0.95624 12.2475 0.996865C11.8131 1.04999 11.3818 1.11249 10.9568 1.23437C9.59121 1.62812 8.28808 2.43437 7.38496 3.53749C7.11933 3.86249 6.85996 4.19687 6.64433 4.55937C6.42558 4.92499 6.25683 5.31561 6.09746 5.70936C5.81621 6.39686 5.68496 7.13124 5.62558 7.87186C5.50996 9.33749 5.90058 10.8812 6.66308 12.1375C7.39746 13.3469 8.50371 14.3937 9.79746 14.9812C10.185 15.1562 10.5818 15.3219 10.9943 15.4375C11.4162 15.5562 11.8506 15.6156 12.285 15.6687C13.0412 15.7594 13.8131 15.6906 14.5568 15.5375C15.9537 15.2531 17.2975 14.4875 18.2818 13.4594C19.2756 12.4219 20.0131 11.0625 20.2318 9.63437C20.2975 9.19999 20.3537 8.76874 20.3537 8.33124C20.3537 7.93124 20.1787 7.50937 19.8975 7.22499C19.6256 6.95311 19.1818 6.74999 18.7912 6.76874C17.9506 6.79999 17.2412 7.44999 17.2381 8.32499ZM22.0725 27.9281C21.46 27.9281 20.8475 27.9281 20.235 27.9281C18.7756 27.9281 17.3193 27.9281 15.86 27.9281C14.1037 27.9281 12.3475 27.9281 10.5881 27.9281C9.07246 27.9281 7.55683 27.9281 6.03808 27.9281C5.32871 27.9281 4.61933 27.9344 3.90996 27.9281C3.83183 27.9281 3.75371 27.9219 3.67871 27.9125C3.81621 27.9312 3.95683 27.95 4.09433 27.9687C3.96933 27.95 3.85058 27.9156 3.73496 27.8687C3.85996 27.9219 3.98496 27.975 4.10683 28.025C3.98183 27.9719 3.86621 27.9031 3.75683 27.8187C3.86308 27.9 3.96621 27.9812 4.07246 28.0625C3.97871 27.9844 3.89121 27.9 3.81621 27.8062C3.89746 27.9125 3.97871 28.0156 4.05996 28.1219C3.97558 28.0125 3.90996 27.8969 3.85371 27.7719C3.90683 27.8969 3.95996 28.0219 4.00996 28.1437C3.96308 28.0281 3.93183 27.9062 3.90996 27.7844C3.92871 27.9219 3.94746 28.0625 3.96621 28.2C3.91621 27.8219 3.95058 27.4219 3.95058 27.0406C3.95058 26.5937 3.95058 26.15 3.95058 25.7031C3.95058 25.3687 3.96933 25.0375 4.01308 24.7062C3.99433 24.8437 3.97558 24.9844 3.95683 25.1219C4.04433 24.4812 4.21308 23.8531 4.46621 23.2562C4.41308 23.3812 4.35996 23.5062 4.30996 23.6281C4.55371 23.0594 4.86621 22.525 5.24433 22.0344C5.16308 22.1406 5.08183 22.2437 5.00058 22.35C5.37871 21.8656 5.81308 21.4281 6.30058 21.05C6.19433 21.1312 6.09121 21.2125 5.98496 21.2937C6.47558 20.9156 7.00996 20.6031 7.57871 20.3594C7.45371 20.4125 7.32871 20.4656 7.20683 20.5156C7.80371 20.2656 8.42871 20.0937 9.07246 20.0062C8.93496 20.025 8.79433 20.0437 8.65683 20.0625C9.11933 20.0031 9.57871 20 10.0443 20C10.6162 20 11.1881 20 11.76 20C13.0943 20 14.4287 20 15.7631 20C16.2787 20 16.7912 19.9969 17.3068 20.0625C17.1693 20.0437 17.0287 20.025 16.8912 20.0062C17.5318 20.0937 18.16 20.2625 18.7568 20.5156C18.6318 20.4625 18.5068 20.4094 18.385 20.3594C18.9537 20.6031 19.4881 20.9156 19.9787 21.2937C19.8725 21.2125 19.7693 21.1312 19.6631 21.05C20.1475 21.4281 20.585 21.8625 20.9631 22.35C20.8818 22.2437 20.8006 22.1406 20.7193 22.0344C21.0975 22.525 21.41 23.0594 21.6537 23.6281C21.6006 23.5031 21.5475 23.3781 21.4975 23.2562C21.7475 23.8531 21.9193 24.4781 22.0068 25.1219C21.9881 24.9844 21.9693 24.8437 21.9506 24.7062C22.01 25.1781 22.0131 25.6469 22.0131 26.1219C22.0131 26.6375 22.0131 27.1531 22.0131 27.6687C22.0131 27.8469 22.0193 28.025 21.9975 28.2C22.0162 28.0625 22.035 27.9219 22.0537 27.7844C22.035 27.9094 22.0006 28.0281 21.9537 28.1437C22.0068 28.0187 22.06 27.8937 22.11 27.7719C22.0568 27.8969 21.9881 28.0125 21.9037 28.1219C21.985 28.0156 22.0662 27.9125 22.1475 27.8062C22.0693 27.9 21.985 27.9875 21.8912 28.0625C21.9975 27.9812 22.1006 27.9 22.2068 27.8187C22.0975 27.9031 21.9818 27.9687 21.8568 28.025C21.9818 27.9719 22.1068 27.9187 22.2287 27.8687C22.1131 27.9156 21.9912 27.9469 21.8693 27.9687C22.0068 27.95 22.1475 27.9312 22.285 27.9125C22.2162 27.9219 22.1443 27.925 22.0725 27.9281C21.6693 27.9344 21.2537 28.1 20.9662 28.3844C20.6943 28.6562 20.4912 29.1 20.51 29.4906C20.5287 29.8937 20.66 30.3125 20.9662 30.5969C21.2693 30.875 21.6506 31.0594 22.0725 31.0531C23.4318 31.0344 24.6193 30.1437 25.0131 28.8437C25.1631 28.3531 25.135 27.8312 25.135 27.325C25.135 26.8437 25.135 26.3594 25.135 25.8781C25.135 25.2437 25.0818 24.6219 24.9725 23.9969C24.6881 22.3687 23.86 20.8344 22.735 19.6312C21.6131 18.4281 20.0975 17.5406 18.5006 17.1469C17.5881 16.9219 16.6631 16.8812 15.7287 16.8812C14.7975 16.8812 13.8693 16.8812 12.9381 16.8812C12.0193 16.8812 11.1037 16.8812 10.185 16.8812C9.22871 16.8812 8.27871 16.9312 7.34746 17.1781C5.76308 17.5969 4.26621 18.4937 3.16621 19.7062C2.05683 20.9281 1.24121 22.4656 0.981831 24.1031C0.884956 24.7156 0.834956 25.3187 0.834956 25.9375C0.834956 26.4219 0.834956 26.9094 0.834956 27.3937C0.834956 27.9156 0.806831 28.4594 0.997456 28.9594C1.15996 29.3875 1.32871 29.6812 1.62558 30.0344C1.80996 30.2531 2.04746 30.4344 2.28496 30.5906C2.35996 30.6406 2.43808 30.6812 2.51621 30.7156C2.70371 30.8 2.90058 30.8937 3.10371 30.9469C3.35996 31.0125 3.63496 31.0469 3.89746 31.05C4.14121 31.0531 4.38496 31.05 4.62871 31.05C5.25371 31.05 5.87558 31.05 6.50058 31.05C7.38808 31.05 8.27246 31.05 9.15996 31.05C10.1912 31.05 11.2225 31.05 12.2537 31.05C13.3131 31.05 14.3693 31.05 15.4287 31.05C16.3975 31.05 17.3631 31.05 18.3318 31.05C19.0912 31.05 19.8506 31.05 20.6068 31.05C21.0412 31.05 21.4756 31.05 21.91 31.05C21.9662 31.05 22.0225 31.05 22.0787 31.05C22.4787 31.05 22.9006 30.875 23.185 30.5937C23.4568 30.3219 23.66 29.8781 23.6412 29.4875C23.6225 29.0844 23.4912 28.6656 23.185 28.3812C22.8725 28.1031 22.4975 27.9281 22.0725 27.9281Z" />
                </svg>
                <span className="ms-3">Employees</span>
              </Link>
            </li>
            {/* Employee End */}

            {/* Projects Start */}
            <li>
              <Link
                to="/projects"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                >
                  <path d="M12 12H6.66667C5.95942 12 5.28115 11.719 4.78105 11.219C4.28095 10.7189 4 10.0406 4 9.33333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H12C12.7072 4 13.3855 4.28095 13.8856 4.78105C14.3857 5.28115 14.6667 5.95942 14.6667 6.66667V9.33333C14.6667 10.0406 14.3857 10.7189 13.8856 11.219C13.3855 11.719 12.7072 12 12 12ZM6.66667 6.66667V9.33333H12V6.66667H6.66667ZM10.6667 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V17.3333C4 16.2725 4.42143 15.2551 5.17157 14.5049C5.92172 13.7548 6.93913 13.3333 8 13.3333H10.6667C11.7275 13.3333 12.7449 13.7548 13.4951 14.5049C14.2452 15.2551 14.6667 16.2725 14.6667 17.3333V24C14.6667 25.0609 14.2452 26.0783 13.4951 26.8284C12.7449 27.5786 11.7275 28 10.6667 28ZM8 16C7.64638 16 7.30724 16.1405 7.05719 16.3905C6.80714 16.6406 6.66667 16.9797 6.66667 17.3333V24C6.66667 24.3536 6.80714 24.6928 7.05719 24.9428C7.30724 25.1929 7.64638 25.3333 8 25.3333H10.6667C11.0203 25.3333 11.3594 25.1929 11.6095 24.9428C11.8595 24.6928 12 24.3536 12 24V17.3333C12 16.9797 11.8595 16.6406 11.6095 16.3905C11.3594 16.1405 11.0203 16 10.6667 16H8ZM25.3333 28H20C19.2928 28 18.6145 27.719 18.1144 27.219C17.6143 26.7189 17.3333 26.0406 17.3333 25.3333V22.6667C17.3333 21.9594 17.6143 21.2811 18.1144 20.781C18.6145 20.281 19.2928 20 20 20H25.3333C26.0406 20 26.7189 20.281 27.219 20.781C27.719 21.2811 28 21.9594 28 22.6667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28ZM20 22.6667V25.3333H25.3333V22.6667H20ZM24 18.6667H21.3333C20.2725 18.6667 19.2551 18.2452 18.5049 17.4951C17.7548 16.7449 17.3333 15.7275 17.3333 14.6667V8C17.3333 6.93913 17.7548 5.92172 18.5049 5.17157C19.2551 4.42143 20.2725 4 21.3333 4H24C25.0609 4 26.0783 4.42143 26.8284 5.17157C27.5786 5.92172 28 6.93913 28 8V14.6667C28 15.7275 27.5786 16.7449 26.8284 17.4951C26.0783 18.2452 25.0609 18.6667 24 18.6667ZM21.3333 6.66667C20.9797 6.66667 20.6406 6.80714 20.3905 7.05719C20.1405 7.30724 20 7.64638 20 8V14.6667C20 15.0203 20.1405 15.3594 20.3905 15.6095C20.6406 15.8595 20.9797 16 21.3333 16H24C24.3536 16 24.6928 15.8595 24.9428 15.6095C25.1929 15.3594 25.3333 15.0203 25.3333 14.6667V8C25.3333 7.64638 25.1929 7.30724 24.9428 7.05719C24.6928 6.80714 24.3536 6.66667 24 6.66667H21.3333Z" />
                </svg>
                <span className="ms-3">Projects</span>
              </Link>
            </li>
            {/* Projects End */}

            {/* Termination Start */}
            <li>
              <Link
                to="/termination"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                >
                  <path d="M12 12H6.66667C5.95942 12 5.28115 11.719 4.78105 11.219C4.28095 10.7189 4 10.0406 4 9.33333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H12C12.7072 4 13.3855 4.28095 13.8856 4.78105C14.3857 5.28115 14.6667 5.95942 14.6667 6.66667V9.33333C14.6667 10.0406 14.3857 10.7189 13.8856 11.219C13.3855 11.719 12.7072 12 12 12ZM6.66667 6.66667V9.33333H12V6.66667H6.66667ZM10.6667 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V17.3333C4 16.2725 4.42143 15.2551 5.17157 14.5049C5.92172 13.7548 6.93913 13.3333 8 13.3333H10.6667C11.7275 13.3333 12.7449 13.7548 13.4951 14.5049C14.2452 15.2551 14.6667 16.2725 14.6667 17.3333V24C14.6667 25.0609 14.2452 26.0783 13.4951 26.8284C12.7449 27.5786 11.7275 28 10.6667 28ZM8 16C7.64638 16 7.30724 16.1405 7.05719 16.3905C6.80714 16.6406 6.66667 16.9797 6.66667 17.3333V24C6.66667 24.3536 6.80714 24.6928 7.05719 24.9428C7.30724 25.1929 7.64638 25.3333 8 25.3333H10.6667C11.0203 25.3333 11.3594 25.1929 11.6095 24.9428C11.8595 24.6928 12 24.3536 12 24V17.3333C12 16.9797 11.8595 16.6406 11.6095 16.3905C11.3594 16.1405 11.0203 16 10.6667 16H8ZM25.3333 28H20C19.2928 28 18.6145 27.719 18.1144 27.219C17.6143 26.7189 17.3333 26.0406 17.3333 25.3333V22.6667C17.3333 21.9594 17.6143 21.2811 18.1144 20.781C18.6145 20.281 19.2928 20 20 20H25.3333C26.0406 20 26.7189 20.281 27.219 20.781C27.719 21.2811 28 21.9594 28 22.6667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28ZM20 22.6667V25.3333H25.3333V22.6667H20ZM24 18.6667H21.3333C20.2725 18.6667 19.2551 18.2452 18.5049 17.4951C17.7548 16.7449 17.3333 15.7275 17.3333 14.6667V8C17.3333 6.93913 17.7548 5.92172 18.5049 5.17157C19.2551 4.42143 20.2725 4 21.3333 4H24C25.0609 4 26.0783 4.42143 26.8284 5.17157C27.5786 5.92172 28 6.93913 28 8V14.6667C28 15.7275 27.5786 16.7449 26.8284 17.4951C26.0783 18.2452 25.0609 18.6667 24 18.6667ZM21.3333 6.66667C20.9797 6.66667 20.6406 6.80714 20.3905 7.05719C20.1405 7.30724 20 7.64638 20 8V14.6667C20 15.0203 20.1405 15.3594 20.3905 15.6095C20.6406 15.8595 20.9797 16 21.3333 16H24C24.3536 16 24.6928 15.8595 24.9428 15.6095C25.1929 15.3594 25.3333 15.0203 25.3333 14.6667V8C25.3333 7.64638 25.1929 7.30724 24.9428 7.05719C24.6928 6.80714 24.3536 6.66667 24 6.66667H21.3333Z" />
                </svg>
                <span className="ms-3">Termination</span>
              </Link>
            </li>
            {/* Termination End */}

            {/* Internships Start */}
            <li>
              <Link
                to="/internships"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="currentcolor"
                >
                  <path d="M19.6519 9.33337H8.98519C8.63157 9.33337 8.29243 9.47385 8.04238 9.7239C7.79233 9.97395 7.65186 10.3131 7.65186 10.6667C7.65186 11.0203 7.79233 11.3595 8.04238 11.6095C8.29243 11.8596 8.63157 12 8.98519 12H19.6519C20.0055 12 20.3446 11.8596 20.5947 11.6095C20.8447 11.3595 20.9852 11.0203 20.9852 10.6667C20.9852 10.3131 20.8447 9.97395 20.5947 9.7239C20.3446 9.47385 20.0055 9.33337 19.6519 9.33337ZM19.6519 14.6667H8.98519C8.63157 14.6667 8.29243 14.8072 8.04238 15.0572C7.79233 15.3073 7.65186 15.6464 7.65186 16C7.65186 16.3537 7.79233 16.6928 8.04238 16.9428C8.29243 17.1929 8.63157 17.3334 8.98519 17.3334H19.6519C20.0055 17.3334 20.3446 17.1929 20.5947 16.9428C20.8447 16.6928 20.9852 16.3537 20.9852 16C20.9852 15.6464 20.8447 15.3073 20.5947 15.0572C20.3446 14.8072 20.0055 14.6667 19.6519 14.6667ZM14.3185 20H8.98519C8.63157 20 8.29243 20.1405 8.04238 20.3906C7.79233 20.6406 7.65186 20.9798 7.65186 21.3334C7.65186 21.687 7.79233 22.0261 8.04238 22.2762C8.29243 22.5262 8.63157 22.6667 8.98519 22.6667H14.3185C14.6721 22.6667 15.0113 22.5262 15.2613 22.2762C15.5114 22.0261 15.6519 21.687 15.6519 21.3334C15.6519 20.9798 15.5114 20.6406 15.2613 20.3906C15.0113 20.1405 14.6721 20 14.3185 20Z" />
                  <path d="M30.3184 14.6667H26.3184V5.33337C26.3184 4.27251 25.8969 3.25509 25.1468 2.50495C24.3966 1.7548 23.3792 1.33337 22.3184 1.33337H6.31836C5.25749 1.33337 4.24008 1.7548 3.48993 2.50495C2.73979 3.25509 2.31836 4.27251 2.31836 5.33337V26.6667C2.31836 27.7276 2.73979 28.745 3.48993 29.4951C4.24008 30.2453 5.25749 30.6667 6.31836 30.6667H27.6517C28.7126 30.6667 29.73 30.2453 30.4801 29.4951C31.2303 28.745 31.6517 27.7276 31.6517 26.6667V16C31.6517 15.6464 31.5112 15.3073 31.2612 15.0572C31.0111 14.8072 30.672 14.6667 30.3184 14.6667ZM23.6517 28H6.31836C5.96474 28 5.6256 27.8596 5.37555 27.6095C5.1255 27.3595 4.98503 27.0203 4.98503 26.6667V5.33337C4.98503 4.97975 5.1255 4.64061 5.37555 4.39056C5.6256 4.14052 5.96474 4.00004 6.31836 4.00004H22.3184C22.672 4.00004 23.0111 4.14052 23.2612 4.39056C23.5112 4.64061 23.6517 4.97975 23.6517 5.33337V28ZM28.985 26.6667C28.985 27.0203 28.8445 27.3595 28.5945 27.6095C28.3445 27.8596 28.0053 28 27.6517 28H26.3184V17.3334H28.985V26.6667Z" />
                </svg>
                <span className="ms-3">Internships</span>
              </Link>
            </li>
            {/* Internships End */}

            {/* Jobs Start */}
            <li>
              <Link
                to="/jobs"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                >
                  <g clip-path="url(#clip0_5_393)">
                    <path d="M26.6667 6.8V4C26.6667 2.93913 26.2452 1.92172 25.4951 1.17157C24.7449 0.421427 23.7275 0 22.6667 0L4.66667 0C3.42899 0 2.242 0.491665 1.36683 1.36683C0.491665 2.242 0 3.42899 0 4.66667L0 25.3333C0.00211714 27.1008 0.705176 28.7953 1.95496 30.045C3.20474 31.2948 4.89921 31.9979 6.66667 32H25.3333C27.1008 31.9979 28.7953 31.2948 30.045 30.045C31.2948 28.7953 31.9979 27.1008 32 25.3333V13.3333C31.9981 11.7971 31.4665 10.3084 30.495 9.11833C29.5235 7.92824 28.1715 7.10946 26.6667 6.8ZM4.66667 2.66667H22.6667C23.0203 2.66667 23.3594 2.80714 23.6095 3.05719C23.8595 3.30724 24 3.64638 24 4V6.66667H4.66667C4.13623 6.66667 3.62753 6.45595 3.25245 6.08088C2.87738 5.70581 2.66667 5.1971 2.66667 4.66667C2.66667 4.13623 2.87738 3.62753 3.25245 3.25245C3.62753 2.87738 4.13623 2.66667 4.66667 2.66667ZM25.3333 29.3333H6.66667C5.6058 29.3333 4.58839 28.9119 3.83824 28.1618C3.08809 27.4116 2.66667 26.3942 2.66667 25.3333V8.86533C3.28975 9.16948 3.97332 9.32943 4.66667 9.33333H25.3333C26.3942 9.33333 27.4116 9.75476 28.1618 10.5049C28.9119 11.2551 29.3333 12.2725 29.3333 13.3333H22.6667C20.8986 13.3333 19.2029 14.0357 17.9526 15.286C16.7024 16.5362 16 18.2319 16 20C16 21.7681 16.7024 23.4638 17.9526 24.714C19.2029 25.9643 20.8986 26.6667 22.6667 26.6667H29.088C28.8132 27.4439 28.305 28.1172 27.6329 28.5945C26.9608 29.0719 26.1577 29.3299 25.3333 29.3333ZM22.6667 24C21.6058 24 20.5884 23.5786 19.8382 22.8284C19.0881 22.0783 18.6667 21.0609 18.6667 20C18.6667 18.9391 19.0881 17.9217 19.8382 17.1716C20.5884 16.4214 21.6058 16 22.6667 16H29.3333V24H22.6667Z" />
                    <path d="M22.6666 21.3333C23.403 21.3333 23.9999 20.7363 23.9999 20C23.9999 19.2636 23.403 18.6666 22.6666 18.6666C21.9302 18.6666 21.3333 19.2636 21.3333 20C21.3333 20.7363 21.9302 21.3333 22.6666 21.3333Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_393">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ms-3">Jobs</span>
              </Link>
            </li>
            {/* Jobs End */}

              {/* Settings start */}

              <li>
              <Link
                to="/settings"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 48 48"
                  fill="currentcolor"
                >
                  <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path>
                </svg>
                <span className="ms-3">Settings</span>
              </Link>
            </li>
              {/* Settings end */}

            {/* Chat Start */}
            <li>
              <Link
                to="/chat"
                className="flex items-center p-2 mt-20 text-white rounded-lg hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="currentcolor"
                >
                  <path d="M10.3184 29.6094C10.1192 29.6127 9.9223 29.5669 9.74503 29.4761C9.51813 29.368 9.3264 29.198 9.19193 28.9857C9.05746 28.7734 8.98574 28.5274 8.98503 28.2761V24.2761H6.31836C5.25749 24.2761 4.24008 23.8547 3.48993 23.1045C2.73979 22.3544 2.31836 21.3369 2.31836 20.2761V6.94275C2.31836 5.88188 2.73979 4.86447 3.48993 4.11432C4.24008 3.36418 5.25749 2.94275 6.31836 2.94275H27.6517C28.7126 2.94275 29.73 3.36418 30.4801 4.11432C31.2303 4.86447 31.6517 5.88188 31.6517 6.94275V20.2761C31.6517 21.3369 31.2303 22.3544 30.4801 23.1045C29.73 23.8547 28.7126 24.2761 27.6517 24.2761H17.4517L11.105 29.3161C10.8812 29.496 10.6053 29.5989 10.3184 29.6094ZM6.31836 5.60942C5.96474 5.60942 5.6256 5.74989 5.37555 5.99994C5.1255 6.24999 4.98503 6.58913 4.98503 6.94275V20.2761C4.98503 20.6297 5.1255 20.9688 5.37555 21.2189C5.6256 21.4689 5.96474 21.6094 6.31836 21.6094H10.3184C10.672 21.6094 11.0111 21.7499 11.2612 21.9999C11.5112 22.25 11.6517 22.5891 11.6517 22.9427V25.5161L16.1984 21.9027C16.4222 21.7228 16.6981 21.6199 16.985 21.6094H27.6517C28.0053 21.6094 28.3445 21.4689 28.5945 21.2189C28.8445 20.9688 28.985 20.6297 28.985 20.2761V6.94275C28.985 6.58913 28.8445 6.24999 28.5945 5.99994C28.3445 5.74989 28.0053 5.60942 27.6517 5.60942H6.31836Z" />
                </svg>
                <span className="ms-3">Chat</span>
              </Link>
            </li>
            {/* Chat End */}

            {/* Latest Activity Start */}
            <li>
              <Link
                to="/activity"
                className="flex items-center p-2 text-white rounded-lg  hover:bg-primary-600 hover:rounded-3xl group focus:bg-primary-600 focus:rounded-3xl group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="currentcolor"
                >
                  <path d="M16.985 1.72498C14.0842 1.72498 11.2486 2.58516 8.83667 4.19675C6.42475 5.80835 4.54488 8.09897 3.4348 10.779C2.32471 13.4589 2.03427 16.4079 2.60018 19.253C3.1661 22.098 4.56296 24.7114 6.61413 26.7625C8.6653 28.8137 11.2787 30.2106 14.1237 30.7765C16.9688 31.3424 19.9177 31.052 22.5977 29.9419C25.2777 28.8318 27.5683 26.9519 29.1799 24.54C30.7915 22.1281 31.6517 19.2924 31.6517 16.3916C31.6471 12.5032 30.1004 8.77535 27.3509 6.02581C24.6013 3.27627 20.8735 1.72956 16.985 1.72498ZM16.985 4.39164C19.9352 4.39564 22.7807 5.48504 24.9793 7.45221C27.1778 9.41938 28.5757 12.1268 28.9064 15.0583H22.3184C22.0517 15.0582 21.7911 15.1381 21.5703 15.2876C21.3495 15.4371 21.1786 15.6493 21.0797 15.897L19.6517 19.4676L15.557 9.23031C15.4581 8.98287 15.2872 8.77076 15.0666 8.62135C14.8459 8.47194 14.5855 8.39209 14.319 8.39209C14.0525 8.39209 13.7922 8.47194 13.5715 8.62135C13.3508 8.77076 13.18 8.98287 13.081 9.23031L10.749 15.0583H5.0637C5.3944 12.1268 6.79224 9.41938 8.9908 7.45221C11.1894 5.48504 14.0349 4.39564 16.985 4.39164ZM16.985 28.3916C14.0349 28.3876 11.1894 27.2982 8.9908 25.3311C6.79224 23.3639 5.3944 20.6565 5.0637 17.725H11.6517C11.9181 17.7248 12.1784 17.6448 12.3989 17.4953C12.6195 17.3459 12.7902 17.1337 12.889 16.8863L14.3184 13.3143L18.413 23.553C18.5118 23.8008 18.6826 24.0134 18.9034 24.1631C19.1242 24.3128 19.3849 24.3929 19.6517 24.3929C19.9185 24.3929 20.1792 24.3128 20.4 24.1631C20.6208 24.0134 20.7916 23.8008 20.8904 23.553L23.221 17.725H28.9064C28.5757 20.6565 27.1778 23.3639 24.9793 25.3311C22.7807 27.2982 19.9352 28.3876 16.985 28.3916Z" />
                </svg>
                <span className="ms-3">Latest Activity</span>
              </Link>
            </li>
            {/* Latest Activity End */}
            
          </ul>
        </div>
      </aside>
      {/* <div>
        <Dashboard />
      </div> */}
    </div>
  );
};
export default Sidebar;
