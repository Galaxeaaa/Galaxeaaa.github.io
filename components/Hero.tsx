import React from "react";
import Image from "next/image";
import { userData } from "@/data/data";
import { CardBody, CardContainer, CardItem } from "@/utils/3DCard";
import { CycledAppearContainer, CycledAppearItem } from "@/utils/CycledAppear";
import { BlurIn } from "@/utils/text-animate";

export default function Hero() {
	return (
		<div className="relative text-plain">
			{/* “Everything we see hides another thing, we always want to see what is hidden by what we see.” <br />
			-- Rene Magritte */}
			<div className="col items-center text-center">
				<CardContainer className="">
					<CardBody className="relative group/card border-0 w-auto h-auto sm:h-[25rem] px-20 py-6 flex flex-col items-center dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]">
						<CardItem
							translateZ="80"
							className="overflow-hidden max-w-[7cm] aspect-square mx-auto shadow-lg rounded-full"
						>
							<img className="-mt-20" src={userData.avatarUrl} alt="avatar" />
						</CardItem>
						<CardItem
							translateZ="100"
							className="text-3xl font-bold mt-4"
						>
							<div className="flex items-center space-x-2">
								<div>Cheng Wang</div>
								<div className="text-4xl">王呈</div>
							</div>
						</CardItem>
						<CardItem
							translateZ="60"
							className="text-lg pt-2 text-light"
						>
							<CycledAppearContainer interval={3500}>
								<CycledAppearItem>
									<BlurIn duration={1}> Researcher </BlurIn>
								</CycledAppearItem>
								<CycledAppearItem>
									<BlurIn duration={1}> Software Engineer </BlurIn>
								</CycledAppearItem>
								<CycledAppearItem>
									<BlurIn duration={1}> Game Developer </BlurIn>
								</CycledAppearItem>
								<CycledAppearItem>
									<BlurIn duration={1}> Badminton Player </BlurIn>
								</CycledAppearItem>
							</CycledAppearContainer>
						</CardItem>
					</CardBody>
				</CardContainer>
				<div className="flex justify-center items-center space-x-4">
					<a href="mailto:chengwang@ucsd.edu"> Email </a>
					<a href="https://github.com/Galaxeaaa"> Github </a>
					<a href="https://www.linkedin.com/in/chengwang1111"> LinkedIn </a>
					<a href="https://drive.google.com/file/d/1O_jdcHgd1_u4p-KMWuS6TaWNmiuWD0Pd/view?usp=sharing"> Resume </a>
				</div>
			</div>
		</div >
	);
}
