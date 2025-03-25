'use client'

import ButtonPlus from "@/components/ButtonPlus";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { useState } from "react";


export default function Home() {

  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <Header onClick={() => setActive(!active)} />
      <Card ativos={active} />
      <ButtonPlus/>
    </div>
  );
}
