import LoginForm from './LoginForm.component';
import { Button } from '@mui/material'; // Assuming you're using Material-UI for buttons

const Banner = () => {
  return (
    <div className="w-[70%]">
      {/* banner 1 */}
      <div className="flex justify-between items-center mt-5 w-full bg-white rounded-lg">
        {/* Form đăng nhập */}
        <div className="w-1/2">
          <LoginForm />
        </div>

        {/* Hình ảnh nhân vật */}
        <div className="w-1/2 flex justify-center">
          <img
            src="https://digital-account.assets.libertymutual.com/login-images/img6.png"
            alt="Character Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* banner 2 */}
      <hr className="my-4 border-0 bg-gray-700" style={{ height: "1px" }} />
      <div className="my-24 flex flex-col justify-start space-y-4 text-[#343741]">
        <h3 className="text-2xl font-semibold text-[32px]">
          Skip login and take action
        </h3>
        <p>You can skip logging in with just a few details.</p>

        <div className="flex space-x-4">
          <Button
            variant="outlined"
            fullWidth={false}
            className="text-black font-semibold border-2 border-blue-600 shadow-md px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Pay your bill
          </Button>

          <Button
            variant="outlined"
            fullWidth={false}
            className="text-black font-semibold border-2 border-blue-600 shadow-md px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            File a claim
          </Button>
        </div>
      </div>

      {/* Banner 3 */}
      <hr className="my-4 border-0 bg-gray-700" style={{ height: "1px" }} />
      <div className="my-16 flex space-x-8">
        {/* Column 1 */}
        <div className="w-1/2">
          <h3 className="text-[24px] text-[#343741]">Not a Liberty Mutual customer?</h3>
          <p className="text-gray-700 my-5">
            If you filed a claim against a Liberty Mutual or Safeco customer, you can register for an account.
          </p>

          <Button
            variant="contained"
            className="bg-blue-600 text-white font-semibold shadow-md px-6 py-2 mt-3 hover:bg-blue-700 transition-colors duration-300"
          >
            Create an account
          </Button>

          <p className="mt-3 text-gray-700">
            If you haven’t filed yet, you can <a href="#" className="text-blue-500 hover:underline">start a claim here</a>.
          </p>
        </div>

        {/* Column 2 */}
        <div className="w-1/2">
          <h3 className="text-[24px] text-[#343741]">Related links</h3>

          <p className="text-gray-700">
            <a href="#" className="text-blue-500 hover:underline">Access your Liberty Mutual business account.</a>
          </p>

          <p className="mt-3 text-gray-700">
            <a href="#" className="text-blue-500 hover:underline">Access your Protective Life policy.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
