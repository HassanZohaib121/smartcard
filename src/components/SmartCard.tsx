"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, GithubIcon, Linkedin, Mail, MapPin, MessageCircle, Phone} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"


export default function SmartCard() {
  const [isSaving, setIsSaving] = useState(false)

  const saveContact = async () => {
    setIsSaving(true)
    try {
      // Create vCard content
      const vCardContent = `BEGIN:VCARD
      VERSION:3.0
      FN:Hassan
      TITLE:Web Developer
      ORG:SMART CARD
      ADR:;;Sargodha;Punjab;;Pakistan
      TEL;TYPE=WORK,VOICE:+923106025047
      END:VCARD`

      // Create a Blob with the vCard content
      const blob = new Blob([vCardContent], { type: "text/vcard;charset=utf-8" })

      // Create a download link
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "contact.vcf"

      // Append the link to the body, click it, and remove it
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Contact Saved",
        description: "The contact information has been downloaded as a vCard file.",
      })
    } catch (error) {
      console.error("Error saving contact:", error)
      toast({
        title: "Error",
        description: "Failed to save contact information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const scheduleCalendarMeeting = () => {
    const title = encodeURIComponent("Meeting with Professional")
    const details = encodeURIComponent("Meeting scheduled via Smart Card")
    const location = encodeURIComponent("Boulevard Plaza, Tower 2, Dubai, U.A.E")
    window.open(`https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&details=${details}&location=${location}`)
  }

  const openLocation = () => {
    const address = encodeURIComponent("Boulevard Plaza, Tower 2, Dubai, U.A.E")
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`)
  }

//   const sendSMS = () => {
//     window.location.href = `sms:+923106025047`
// }

//   const sendSMS = () => {
//     setPhoneNumber("+923106025047")
//     const message = encodeURIComponent("Hello from my Smart Card!");
//     window.location.href = `sms:${phoneNumber}?body=${message}`;
//   };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-950 text-white border-none">
        <CardHeader className="flex flex-col items-center space-y-2">
          <div className="flex justify-between w-full px-4">
            <Image
              src="/h.png"
              alt="Smart Card Logo"
              width={32}
              height={32}
              className="invert"
            />
            {/* <div className="flex gap-2">
              <Share2 className="w-5 h-5" />
              <span className="text-xl">⋮</span>
            </div> */}
          </div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src="./hassan.jpg" alt="Profile picture" fill className="object-cover" />
          </div>
          <div className="text-center">
          <h2 className="text-xl font-semibold">Hassan Zohaib</h2>
            <p className="text-sm text-zinc-400">Web Developer</p>
            <p className="text-xs text-zinc-500">SMART CARD</p>
            <p className="text-xs text-zinc-500">Sargodha, Pakistan</p>
          </div>
        </CardHeader>

        <CardContent>
          <Button
            variant="secondary"
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
            onClick={saveContact}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Contact"}
          </Button>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <Link target="_blank" href="tel:+923106025047">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs">Call</span>
            </Button>
            </Link>
            <Link target="_blank" href="mailto:hassan.zohaib.184@gmail.com">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs">Email</span>
            </Button>
            </Link>
            <Link href="sms:+923106025047">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs">SMS</span>
            </Button>
            </Link>
            <Link target="_blank" href="https://wa.me/+923106025047">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs">WhatsApp</span>
            </Button>
            </Link>
            <Link href="#">
            <Button onClick={scheduleCalendarMeeting} variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs">Calendar</span>
            </Button>
            </Link>
            <Link href="#">
            <Button onClick={openLocation} variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs">Location</span>
            </Button>
            </Link>
            {/* <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Skype className="w-5 h-5" />
              </div>
              <span className="text-xs">Skype</span>
            </Button> */}
            <Link target="_blank" href="https://m.me/hassan.zohaib.184">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs">Messenger</span>
            </Button>
            </Link>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-4 pt-4">
            <Link target="_blank" href="https://www.linkedin.com/in/hassan-zohaib184">
          <Button variant="ghost" className="bg-[#0077b5] hover:bg-[#0077b5]/90 rounded-full w-10 h-10 p-0">
            <span className="sr-only">LinkedIn</span>
            <Linkedin />
          </Button>
            </Link>
            <Link href="">
            <Link
            href="https://threads.net/hassanzohaib121"
            className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
            aria-label="Threads"
          >
          <Button variant="ghost" className="bg-[#E4405F] hover:bg-[#E4405F]/90 rounded-full w-10 h-10 p-0">
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 192 192"
            >
              <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
            </svg>
          </Button>
          </Link>
            </Link>
          <Link target="_blank" href="https://github.com/HassanZohaib121" aria-label="Github">
          <Button variant="ghost" className="bg-[#E4405F] hover:bg-[#E4405F]/90 rounded-full w-10 h-10 p-0">
            <span className="sr-only">Github</span>
            <GithubIcon />
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

