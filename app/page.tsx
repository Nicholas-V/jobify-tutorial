import Image from "next/image";
import Logo from "../assets/logo.svg"
import Landing from "../assets/main.svg"
import {Button} from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
                <Image src={Logo} alt="logo"/>
            </header>
            <section
                className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
                <div>
                    <h1 className="capitalize text-4xl md:text-7xl font-bold">
                        job <span className="text-primary">tracking</span> app
                    </h1>
                    <p className="leading-loose max-w-md mt-4">
                        LOREM IPSUM GENERATOR
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button asChild className="mt-4">
                        <Link href="/add-job">Get Started</Link>
                    </Button>
                </div>
                <Image src={Landing} alt="landing" className="hidden lg:block"/>
            </section>
        </main>
    );
}
