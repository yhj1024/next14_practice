'use client'

import { useRouter } from 'next/navigation'
import styles from "@/app/page.module.css";
import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import Link from "next/link";
export default function Login () {
  const router = useRouter();
  router.replace('/i/flow/login');
  // push, replace 는 뒤로 가기 시 차이가 있다
  // push : login -> i/flow/login
  // replace : i/flow/login
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo as string} alt="logo"/>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href={"/i/flow/signup"} className={styles.signup}>계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href={"/login"} className={styles.login}>로그인</Link>
      </div>
    </>
  );
}