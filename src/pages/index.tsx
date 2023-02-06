import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"

import shirtOne from '@/assets/shirts/1.png'
import shirtTwo from '@/assets/shirts/2.png'
import shirtThree from '@/assets/shirts/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirtOne} alt="" width={520} height={480}/>
        {/* <Image src={shirtTwo} alt="" width={520} height={480}/>
        <Image src={shirtThree} alt="" width={520} height={480}/> */}
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        {/* <Image src={shirtOne} alt="" width={520} height={480}/> */}
        <Image src={shirtTwo} alt="" width={520} height={480}/>
        {/* <Image src={shirtThree} alt="" width={520} height={480}/> */}
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
