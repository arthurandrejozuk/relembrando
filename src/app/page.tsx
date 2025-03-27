'use client'

import ButtonPlus from "@/components/ButtonPlus";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const HomeStyled = styled(motion.div)`
  
  

`

export default function Home() {

  const [active, setActive] = useState<boolean>(false);

  return (
    <HomeStyled>
        <Header onClick={() => setActive(!active)} />
        <Card ativos={active} />
        <ButtonPlus />
        <Footer active={active} />
    </HomeStyled>
  );
}
