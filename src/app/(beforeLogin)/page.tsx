import Image from 'next/Image';
import styles from '../page.module.css'
import zLogo from '../../../public/zlogo.png'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo as string} alt="logo"/>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href={"/i/flow/singup"} className={styles.signup}>회원가입</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href={"/login"} className={styles.login}>로그인</Link>
      </div>
    </>
  );
}
