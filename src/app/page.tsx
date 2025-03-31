'use client'

import ButtonPlus from "@/components/ButtonPlus";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const HomeStyled = styled(motion.div)`
  
  

`

export default function Home() {

  const [active, setActive] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <HomeStyled>
        <Header onClick={() => setActive(!active)} />
        <Card ativos={active} />
        <Modal open={openModal}><Form/></Modal>
        <ButtonPlus abreOuFecha={openModal} onClick={() => setOpenModal(!openModal)} />
        <Footer active={active} />
    </HomeStyled>
  );
}
