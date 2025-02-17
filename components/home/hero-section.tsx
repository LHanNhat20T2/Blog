import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-950  to-indigo-900">
            <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl"></div>
            <div className="container relative mx-auto flex h-full flex-col items-center px-4 py-24 md:flex-row md:py-32">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Explore the World Though
                        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                            {" "}
                            Words
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
                        Discover insightfull 
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row ">
                        <Button className="rounded-full">Start Reading</Button>
                        <Button className="rounded-full " variant="outline">
                            Explore Topic
                        </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-8 text-white md:max-w-md">
                        <div className="space-y-2">
                            <div className="text-2xl font-bold text-primary">
                                1K+
                            </div>
                            <div className="text-sm text-gray-400">
                                Publish articles
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-bold text-primary">
                                50+
                            </div>
                            <div className="text-sm text-gray-400">
                                Expert Writers
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-bold text-primary">
                                1K+
                            </div>
                            <div className="text-sm text-gray-400">
                                Monthly Readers
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                </div>
                <div className="mt-12 flex-1 md:mt-0">
                    <div
                        className={cn(
                            "relative mx-auto w-64 h-64 rounded-2xl overflow-hidden",
                            "bg-gradient-to-br from-white/5 to-transparent",
                            "border border-primary/20 backdrop-blur-lg",
                            "shadow-indigo-500/10"
                        )}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1739560116869-84714fa15b3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            fill
                            alt=""
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;
