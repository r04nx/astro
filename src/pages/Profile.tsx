/**
 * v0 by Vercel.
 * @see https://v0.dev/t/g990kNIqRvO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profilePicture, setProfilePicture] = useState(null)
  const [signature, setSignature] = useState(null)
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setProfilePicture()
  }
  const handleSignatureChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    // setSignature()
  }
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-12">
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl mx-auto font-bold">Edit Profile</h1>
          {!isEditing && (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
              <FilePenIcon className="h-5 w-5" />
              <span className="sr-only">Edit profile</span>
            </Button>
          )}
        </div>
        <p className="text-muted-foreground">Update your personal information.</p>
      </div>
      <Card>
        <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            {isEditing ? (
              <Input id="firstName" placeholder="Enter your first name" />
            ) : (
              <div className="font-medium">John</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="middleName">Middle Name</Label>
            {isEditing ? (
              <Input id="middleName" placeholder="Enter your middle name" />
            ) : (
              <div className="font-medium">Doe</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            {isEditing ? (
              <Input id="lastName" placeholder="Enter your last name" />
            ) : (
              <div className="font-medium">Doe</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="age">Age</Label>
            {isEditing ? (
              <Input id="age" type="number" placeholder="Enter your age" />
            ) : (
              <div className="font-medium">35</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            {isEditing ? (
              <Input id="phoneNumber" placeholder="Enter your phone number" />
            ) : (
              <div className="font-medium">+1 (555) 555-5555</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            {isEditing ? <Input id="dateOfBirth" type="date" /> : <div className="font-medium">1988-05-15</div>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="timeOfBirth">Time of Birth</Label>
            {isEditing ? <Input id="timeOfBirth" type="time" /> : <div className="font-medium">10:30 AM</div>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="placeOfBirth">Place of Birth</Label>
            {isEditing ? (
              <Input id="placeOfBirth" placeholder="Enter your place of birth" />
            ) : (
              <div className="font-medium">New York, USA</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="caste">Caste</Label>
            {isEditing ? (
              <Input id="caste" placeholder="Enter your caste" />
            ) : (
              <div className="font-medium">Brahmin</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="latestQualification">Latest Qualification</Label>
            {isEditing ? (
              <Input id="latestQualification" placeholder="Enter your latest qualification" />
            ) : (
              <div className="font-medium">Master's Degree</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mothersName">Mother's Name</Label>
            {isEditing ? (
              <Input id="mothersName" placeholder="Enter your mother's name" />
            ) : (
              <div className="font-medium">Jane Doe</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="fathersName">Father's Name</Label>
            {isEditing ? (
              <Input id="fathersName" placeholder="Enter your father's name" />
            ) : (
              <div className="font-medium">John Doe</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            {isEditing ? (
              <Textarea id="address" placeholder="Enter your address" />
            ) : (
              <div className="font-medium">123 Main St, Anytown USA</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            {isEditing ? (
              <Input id="email" type="email" placeholder="Enter your email" />
            ) : (
              <div className="font-medium">john.doe@example.com</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            {isEditing ? (
              <Input id="password" type="password" placeholder="Enter your password" />
            ) : (
              <div className="font-medium">********</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="horoscope">Horoscope</Label>
            {isEditing ? (
              <Input id="horoscope" placeholder="Enter your horoscope" />
            ) : (
              <div className="font-medium">Aries</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="profilePicture">Profile Picture</Label>
            {isEditing ? (
              <Input id="profilePicture" type="file" onChange={handleProfilePictureChange} />
            ) : (
              <div className="flex items-center gap-2">
                {profilePicture ? (
                  <img
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Profile Picture"
                    className="rounded-full"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                ) : (
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Profile Picture" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                )}
                <div className="font-medium">Profile Picture</div>
              </div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signature">Signature</Label>
            {isEditing ? (
              <Input id="signature" type="file" onChange={handleSignatureChange} />
            ) : (
              <div className="flex items-center gap-2">
                {signature ? (
                  <img
                    src="/placeholder.svg"
                    width={100}
                    height={50}
                    alt="Signature"
                    style={{ aspectRatio: "100/50", objectFit: "cover" }}
                  />
                ) : (
                  <img
                    src="/placeholder.svg"
                    width={100}
                    height={50}
                    alt="Signature"
                    style={{ aspectRatio: "100/50", objectFit: "cover" }}
                  />
                )}
                <div className="font-medium">Signature</div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          {isEditing ? (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button>Save Profile</Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
              <FilePenIcon className="h-5 w-5" />
              <span className="sr-only">Edit profile</span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

function FilePenIcon(props : React.SVGProps<SVGSVGElement> ) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}