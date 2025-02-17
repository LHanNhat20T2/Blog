import { Button } from "@/components/ui/button";
import SearchInput from "@/components/home/header/search-input";
import ToggleMode from "@/components/home/header/toggle-mode";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 w-full border border-b bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* left section */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                    Han Nhat
                                </span>
                                <span>Dev</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/articles"
                            className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
                        >
                            Bài viết
                        </Link>
                        <Link
                            href="/tutorial"
                            className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
                        >
                            Hướng dẫn
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
                        >
                            Giới thiệu
                        </Link>
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
                        >
                            Trang chủ
                        </Link>
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <SearchInput />
                        <ToggleMode />
                        <div className="hidden md:flex items-center gap-2">
                            <Button>Đăng nhập</Button>
                            <Button>Đăng ký</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
