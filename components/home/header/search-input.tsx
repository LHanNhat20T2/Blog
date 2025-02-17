import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const searchInput = () => {
    return (
        <form>
            <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    name="search"
                    placeholder="Nhập bài viết..."
                    className="pl-10 w-72 focus-within:ring-1"
                />
            </div>
        </form>
    );
};
export default searchInput;
