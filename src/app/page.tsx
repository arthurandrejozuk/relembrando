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
    min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  

`

export default function Home() {

  function success() {
     setTimeout(() => {
            setOpenModal(false)
          }, 2000)
      setRefresh(prev => !prev)
  }

  const [active, setActive] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  return (
    <HomeStyled>
        <Header onClick={() => setActive(!active)} />
        <Card refresh={refresh} ativos={active} />
        <Modal open={openModal}><Form onSuccess={success}/></Modal>
        <ButtonPlus abreOuFecha={openModal} onClick={() => setOpenModal(!openModal)} />
        <Footer active={active} />
    </HomeStyled>
  );
}
