"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Modal from "./Modal";

import RentModal from "./RentModal";
import { Button } from "@/components/ui/button";

const FormTriger = () => {
  return (
      <>
            <Modal>
                <Modal.Trigger name="share">
                  <Button variant="destructive">Je m'inscris maintenant</Button>
                </Modal.Trigger>
                
              <Modal.Window name="share">
                <RentModal />
            </Modal.Window>


            </Modal>
        </>
  
  );
};

export default FormTriger;
