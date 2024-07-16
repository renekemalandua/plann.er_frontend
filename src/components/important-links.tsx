import { Link2, Plus } from "lucide-react";
import { Button } from "./button";

export function ImportantLinks(){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva no AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://app.rocketseat.com.br/events/nlw-journey/react/aula-02-react
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0"/>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva no AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://app.rocketseat.com.br/events/nlw-journey/react/aula-02-react
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0"/>
                </div>
            </div>
            <Button variant="secondary" size="full" >
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
        </div>
    )
}