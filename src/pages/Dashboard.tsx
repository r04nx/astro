
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "../components/common/Navbar.tsx"


export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar></Navbar>
    
      <main className="flex-1 container px-4 py-8 sm:px-6 md:px-8">
        <Tabs defaultValue="queries">
          <TabsList>
            <TabsTrigger value="queries">User Queries</TabsTrigger>
            <TabsTrigger value="analytics">User Analytics</TabsTrigger>
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
          </TabsList>
          <TabsContent value="queries">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>User Queries</CardTitle>
                  <CardDescription>View, reply, and remove user queries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Query</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">John Doe</div>
                              <div className="text-sm text-muted-foreground">johndoe@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">Astrology Consultation</div>
                            <div className="text-sm text-muted-foreground">
                              I would like to schedule an astrology consultation.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-muted-foreground">2023-04-15</div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="icon" variant="ghost">
                                <MoveVerticalIcon className="h-5 w-5" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <UserIcon className="mr-2 h-4 w-4" />
                                <span onClick={() => {console.log("User")} }>View Profile</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <MessageCircleIcon className="mr-2 h-4 w-4" />
                                <span onClick={() => {}}>Reply</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-500">
                                <TrashIcon className="mr-2 h-4 w-4" />
                                Remove
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>User Analytics</CardTitle>
                  <CardDescription>Overview of your user base.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold">1,234</CardTitle>
                        <CardDescription>Total Registered Users</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold">789</CardTitle>
                        <CardDescription>Total Subscribed Users</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold">456</CardTitle>
                        <CardDescription>Users with Active Plans</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="chat">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Respond to user queries in real-time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                        <UserAvatar className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 rounded-lg bg-muted p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-muted-foreground">2:39 PM</div>
                        </div>
                        <div>
                          <p>Hi, I'm interested in getting an astrology reading. Can you help me with that?</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="" alt="User Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                        <UserAvatar className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                      </Avatar>
                      <div className="flex-1 rounded-lg bg-muted p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-xs text-muted-foreground">2:41 PM</div>
                        </div>
                        <div>
                          <p>I'm having trouble understanding my birth chart. Can you explain it to me?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <form className="flex gap-2">
                    <Input type="text" placeholder="Type your message..." className="flex-1" />
                    <Button type="submit">Send</Button>
                  </form>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost">
            <MoveVerticalIcon className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">johndoe@example.com</div>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <div className="font-medium">About</div>
                <div className="text-sm text-muted-foreground">
                  I am an astrology enthusiast and I love helping people understand their birth charts.
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <div className="font-medium">Joined</div>
                <div className="text-sm text-muted-foreground">April 15, 2023</div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save</Button>
              </div>
            </div>
            <div>
              <div>
                <div className="font-medium">Subscription</div>
                <div className="text-sm text-muted-foreground">Active</div>
              </div>
              <Separator className="my-4" />
              <div>
                <div className="font-medium">Plan</div>
                <div className="text-sm text-muted-foreground">Premium</div>
              </div>
              <Separator className="my-4" />
              <div>
                <div className="font-medium">Billing</div>
                <div className="text-sm text-muted-foreground">$9.99/month</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost">
            <MoveVerticalIcon className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">johndoe@example.com</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="font-medium">Astrology Consultation</div>
                <div className="text-sm text-muted-foreground">I would like to schedule an astrology consultation.</div>
              </div>
              <Separator className="my-4" />
              <form className="space-y-4">
                <Textarea placeholder="Enter your response..." className="min-h-[100px]" />
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button type="submit">Respond</Button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function MessageCircleIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function MoveVerticalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  )
}


function OrbitIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
      <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
    </svg>
  )
}


function TrashIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
function UserAvatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}