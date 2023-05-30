import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NoExiste = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [])
  

  return ( 
    <div className="container">
      <h1>Ooooooops...</h1>
      <h2>Esta Pagina No Existe</h2>
      <p>Vuelta al <Link href="/"><a>Home</a></Link></p>
    </div>
   );
}
 
export default NoExiste;  