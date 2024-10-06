import laravelLogo from "../../assets/laravel-logo.svg";
import reactLogo from "../../assets/react-logo.svg";

export default function AppLogo() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <img src={laravelLogo} alt="Laravel Logo" className="h-8" />
      <img src={reactLogo} alt="React Logo" className="h-10" />
    </div>
  );
}
