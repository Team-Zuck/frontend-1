'use client'
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { heart, info, message, phone, profile, trash, video } from "@/public";
import { MoveLeft, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Conversations = () => {

  useEffect(() => {

  }, [])
  return (
    <div className="w-full full">
      <div className="ml-[20px] xl:ml-[42px] flex items-center pt-[45px] gap-4">
        <Link href="/">
          <MoveLeft className="size-6 text-primary" />
        </Link>
        <h1 className="text-lg text-[#244469]">Applications/Conversations</h1>
      </div>
      <div className="flex bg-white w-full justify-between xl:mt-[55px]  pr-4 flex-col xl:flex-row h-full pt-4">
        <Tabs defaultValue={'contacts'} className="w-full h-full">
          <div className="w-[90%] mx-auto bg-[#E3E3E3] rounded-lg p-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <Image
                  src={profile}
                  width={69}
                  height={69}
                  className="rounded-full"
                  alt="user"
                />

                <div className="">
                  <p className="text-[#244469] text-[16px] font-semibold">
                    James Johnson
                  </p>
                  <p className="text-[#5C5C5C] text-[10px]">
                    Jamesjohnson@empraizal.com
                  </p>
                  <p className="text-[#5C5C5C] text-[12px]">
                    Last update: 16 Jun 2024
                  </p>
                </div>
              </div>
              <Button>
                <Plus />
                Add contact
              </Button>
            </div>
            <TabsList defaultValue={'contacts'} className="flex justify-between bg-[#E3E3E3]">
              <TabsList defaultValue={'contacts'}>
                <TabsTrigger value="contacts">My Contacts</TabsTrigger>
                <TabsTrigger value="groups">My Groups</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>

              <div>
                <Button variant="ghost">
                  <Image src={phone} width={16} height={16} alt="phone" />
                </Button>
                <Button variant="ghost">
                  <Image src={video} width={16} height={16} alt="phone" />
                </Button>
                <Button variant="ghost">
                  <Image src={info} width={16} height={16} alt="phone" />
                </Button>
              </div>
            </TabsList>
          </div>
          <TabsContent defaultValue={'contacts'} value="contacts">
            <div className="bg-white w-[95%] mx-auto h-fit min-h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Raphael Onunkwor
                    </TableCell>
                    <TableCell>raphael.onun@gmail.com</TableCell>
                    <TableCell>Software Developer</TableCell>
                    <TableCell className="text-right ">
                      <span className="flex justify-end gap-x-2">
                        <Image src={heart} width={15} height={15} alt="icon" />
                        <Image
                          src={message}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                        <Image src={trash} width={15} height={15} alt="icon" />
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="groups">
            <div className="bg-white w-full h-fit min-h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]"></div>
          </TabsContent>
          <TabsContent value="favorites">
            <div className="bg-white w-full h-fit min-h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]"></div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Conversations;
