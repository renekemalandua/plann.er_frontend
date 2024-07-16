import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "../../components/invite-guest-modal";
import { ConfirmTripModal } from "../../components/confirm-trip-modal";
import { DestinationDataStep } from "../../components/step/destination-data-step";
import { InviteGuestStep } from "../../components/step/invite-guest-step";
import { DateRange } from "react-day-picker";
import { Api } from "../../libs/axios";

export function CreateTrip() {

  const Navigate = useNavigate();

  const [isGuestInputOpen, setIsGuestInputOpen] =  useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [destination, setDestination] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>();



  const [emailsToIvite, setEmailsToIvite] = useState<string[]>([]);

  function openGuestInput(){
    setIsGuestInputOpen(true);
  }

  function closeGuestInput(){
    setIsGuestInputOpen(false);
  }

  function openGuestModal(){
    setIsGuestModalOpen(true);
  }

  function closeGuestModal(){
    setIsGuestModalOpen(false);
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false);
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();

    if(!email){
      return 0
    }

    if(emailsToIvite.includes(email)){
      return 0
    }

    setEmailsToIvite([
      ...emailsToIvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailToInvite(emailToRemove: string){
    const newEmailList = emailsToIvite.filter(email => email !== emailToRemove);
    setEmailsToIvite(newEmailList);
  }

  async function createTrip(){
   // event.preventDefault()

    console.log(destination)
    console.log(ownerName)
    console.log(ownerEmail)
    console.log(emailsToIvite)
    console.log(eventStartAndEndDate)

    if(!destination){
      return
    }
    if(!eventStartAndEndDate?.from || !eventStartAndEndDate.to){
      return
    }
    if(!ownerName || !ownerEmail){
      return
    }

    if(emailsToIvite.length === 0){
      return
    }

    ///console.log('certos');
    ///const response = await Api.post('/trips',{
    ///  destination,
    ///  starts_at: eventStartAndEndDate.from,
    ///  ends_at: eventStartAndEndDate.to,
    ///  emails_to_invite: emailsToIvite,
    ///  owner_name: ownerName,
    ///  owner_email: ownerEmail,
    ///})
///
    ///console.log(response)
    ///const {tripId} = response.data;
    
    Navigate(`/trip/1`)
  }
 
  
  return (
   <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
    <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className="flex flex-col items-center gap-3">
            <img src="/logo.svg" alt="plann.er" />
            <p className="text-zinc-300 text-lg">Convide seus amigos e planeje a sua proxima viajem</p>
        </div>
        
        <div className="space-y-4">
            <DestinationDataStep
                closeGuestInput={closeGuestInput}
                isGuestInputOpen= {isGuestInputOpen}
                openGuestInput={openGuestInput}
                setDestination={setDestination}
                eventStartAndEndDate = {eventStartAndEndDate}
                setEventStartAndEndDate={setEventStartAndEndDate}
            />
            
            { isGuestInputOpen && (
              <InviteGuestStep
                emailsToIvite={emailsToIvite}
                openConfirmTripModal={openConfirmTripModal}
                openGuestModal={openGuestModal}
              />
            )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar a sua viagem pela plann.er você automaticamente concorda <br/>
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">politicas de privacidade</a>
        </p>

    </div>
      {isGuestModalOpen && (
        <InviteGuestModal
            emailsToIvite={emailsToIvite}
            addEmailToInvite={addEmailToInvite}
            closeGuestModal={closeGuestModal}
            removeEmailToInvite={removeEmailToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
            addEmailToInvite={addEmailToInvite}
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
            setOwnerName = {setOwnerName}
            setOwnerEmail = {setOwnerEmail}
        />
      )}
     
   </div>
  )
}