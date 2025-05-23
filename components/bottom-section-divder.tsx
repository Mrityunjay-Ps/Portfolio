"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BottomSectionDivider() {
    return (
        <motion.div
            className="bg-gray-200 my-14 h-1.5 w-32 rounded-full hidden sm:block dark:bg-opacity-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        ></motion.div>
    );
}