/* eslint-disable import/no-anonymous-default-export */
'use client';

import { ApplicationContext } from "@/context/applicationContext";
import { useContext } from "react";

export default () => useContext(ApplicationContext);