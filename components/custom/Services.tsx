/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import { Typography } from "../ui/typography";
import Portfolio from "./Portfolio";
import About from "./About";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "../shared/Variants2";

const Services = () => {
  return (
    <motion.section className="service-banner-bg" id="services">
      <motion.div className="mt-20 px-6 sm:px-12">
        <h1 className="background-text">SERVICES</h1>

        {/*for  UI UX */}
        <motion.div
          id="div2"
          className="border-t-[1px] border-background mt-24 flex flex-col md:flex-nowrap md:flex-row"
        >
          <div className=" basis-full sm:basis-6/12 py-12 space-y-6 ">
            <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] ">
              UIUX Designs
            </h1>
            <div className=" hidden md:flex flex-col space-y-6">
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-55 ">
                UIUX Designs
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-35 ">
                UIUX Designs
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-15 ">
                UIUX Designs
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-5 ">
                UIUX Designs
              </h1>
            </div>
          </div>
          <motion.div className="basis-full sm:basis-6/12 py-8">
            <motion.h2
              variants={fadeIn("right", "spring", 0.2, 0.4)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="text-background"
            >
              Experience the power of our top-notch UI/UX design services,
              unlocking your digital potential. From elegant interfaces to
              seamless user journeys, we specialize in tailoring custom
              solutions to your specifications. Entrust us to elevate your
              online presence, captivating your audience with captivating
              design. Let&apos;s collaborate on crafting your digital
              masterpiece.
            </motion.h2>

            <motion.ul className="block list-disc text-background  mt-8 space-y-5">
              <motion.li
                variants={fadeIn("right", "spring", 0.2, 0.4)}
                initial="hidden"
                whileInView={"show"}
                exit={"show"}
              >
                Crafting tailored UI/UX solutions from start to finish,
                guaranteeing a distinct online presence aligned with your brand
                identity.
              </motion.li>
              <motion.li
                variants={fadeIn("right", "spring", 0.4, 0.4)}
                initial="hidden"
                whileInView={"show"}
                exit={"show"}
              >
                Specializing in captivating designs and seamless user
                experiences across devices, we prioritize accessibility and
                engagement for a unified digital journey.
              </motion.li>
              <motion.li
                variants={fadeIn("right", "spring", 0.6, 0.4)}
                initial="hidden"
                whileInView={"show"}
                exit={"show"}
              >
                With expertise in maximizing accessibility and engagement, we
                ensure cohesive digital experiences that transcend platforms,
                delivering impactful results.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* for visual designs */}
        <motion.div
          id="div1"
          className="border-t-[1px] border-background mt-12 flex flex-col md:flex-nowrap md:flex-row"
        >
          <motion.div className=" basis-full sm:basis-6/12 py-12 space-y-6 ">
            <motion.h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] ">
              VISUAL DESIGNS
            </motion.h1>
            <div className=" hidden md:flex flex-col space-y-6">
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-55 ">
                VISUAL DESIGNS
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-35 ">
                VISUAL DESIGNS
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-15 ">
                VISUAL DESIGNS
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-5 ">
                VISUAL DESIGNS
              </h1>
            </div>
          </motion.div>
          <motion.div className="basis-full sm:basis-6/12 py-8">
            <motion.h2
              variants={fadeIn("right", "spring", 0.2, 0.4)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="text-background"
            >
              I am a passionate and creative visual designer with 3 years of
              experience crafting visually compelling designs that captivate and
              communicate effectively. I specialize in blending aesthetics with
              functionality to create designs that tell a story, engage
              audiences, and elevate brand identities. My expertise spans
              digital and print media, ensuring every project is tailored to its
              unique audience and purpose.
            </motion.h2>

            <motion.ul className="block list-disc text-background mt-8 space-y-5">
              <motion.li
                variants={fadeIn("right", "spring", 0.2, 0.4)}
                initial="hidden"
                whileInView={"show"}
                exit={"show"}
              >
                Brand Identity Design: Crafting logos, color palettes, and
                visual guidelines to establish cohesive brand identities.
              </motion.li>
              <motion.li
                variants={fadeIn("right", "spring", 0.4, 0.4)}
                initial="hidden"
                whileInView={"show"}
                exit={"show"}
              >
                UI/UX Design: Designing intuitive and engaging interfaces for
                websites and mobile applications.
              </motion.li>
              <motion.li
                variants={fadeIn("right", "spring", 0.6, 0.4)}
                initial="hidden"
                whileInView={"show"}
                exit={"show"}
              >
                Graphic Design: Producing high-quality visuals for marketing
                campaigns, social media, and print materials.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
      <Portfolio />
      <About />
    </motion.section>
  );
};

export default Services;
