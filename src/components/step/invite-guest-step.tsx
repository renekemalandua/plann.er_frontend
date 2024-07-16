import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../button";

interface IinviteGuestStepProps {
    openGuestModal: () => void
    emailsToIvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestStep({emailsToIvite, openConfirmTripModal, openGuestModal}: IinviteGuestStepProps){
    return (
        <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">

        <button type="button" onClick={openGuestModal} className="flex items-center gap-2 flex-1">
          <UserRoundPlus className="size-5 text-zinc-400"/>
          {emailsToIvite.length > 0? (
           <span className="bg-transparent text-lg flex-1 text-left" >{emailsToIvite.length} pessoa(s) Convidada(s)</span>
          ) : (
           <span className="bg-transparent text-lg flex-1 text-left" >Quem estará na viagem ?</span>
          )}
          
        </button>

        <div className="w-px h-6 bg-zinc-800"/>

        <Button onClick={openConfirmTripModal}>
          Confirmar viagem
          <ArrowRight className="size-5"/>
        </Button>

        </div>
    )
}