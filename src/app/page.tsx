import Image from "next/image";
import styles from "./page.module.css";
import myNavbar from "@/component/layout/navbar/navbar";
import MyNavbar from "@/component/layout/navbar/navbar";
import HomePage from "./home/homePage";
export default function Home() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <HomePage></HomePage>
    </div>
  );
}
