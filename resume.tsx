"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Linkedin, Moon, Sun, Download } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import Head from "next/head"

export default function Resume() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Set document title and wait for mounting
  useEffect(() => {
    document.title = "Osama Resume"
    setMounted(true)
  }, [])

  // Function to print the resume (which can be saved as PDF from the print dialog)
  const handlePrint = () => {
    window.print()
  }

  // Contact information with proper links
  const email = "osamasiddiqui7809@gmail.com"
  const phoneNumber = "03456198029"
  const linkedInUrl = "https://www.linkedin.com/in/osama-siddiqui-8b552a296/"

  // Format phone number for WhatsApp (remove any non-digit characters)
  const whatsappNumber = phoneNumber.replace(/\D/g, "")

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 print:p-0 print:bg-white">
      {/* Document title */}
      <Head>
        <title>Osama Resume</title>
        <meta name="description" content="Osama Siddiqui - External Auditor Resume" />
      </Head>

      <Card className="mx-auto max-w-4xl shadow-lg print:shadow-none dark:bg-gray-800">
        <CardContent className="p-0">
          <div className="relative">
            {/* Theme toggle and download buttons - hidden when printing */}
            <div className="flex justify-between w-full print:hidden px-4 pt-2 pb-0">
              {/* Theme toggle button - only show when mounted to avoid hydration mismatch */}
              {mounted && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}

              {/* Download PDF button */}
              <Button
                onClick={handlePrint}
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-1 z-10"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>

            {/* Header */}
            <div className="bg-primary p-4 sm:p-6 text-primary-foreground print:p-4 mt-0 print:mt-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Profile Image */}
                  <div className="w-28 h-28 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md print:w-20 print:h-20 flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/view-3d-businessman.jpg-lEikW1GGlboP1LQmY1gVIqKKzw7s22.jpeg"
                      alt="Osama Siddiqui"
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                      priority
                      unoptimized
                    />
                  </div>

                  {/* Name and Title */}
                  <div className="text-center sm:text-left mt-2 sm:mt-0">
                    <h1 className="text-2xl font-bold">Osama Siddiqui</h1>
                    <h2 className="text-lg font-medium mt-1">External Auditor</h2>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-1 text-sm mt-2 sm:mt-0 text-center sm:text-right">
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="print:inline hidden">{email}</span>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline truncate print:hidden"
                    >
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="print:inline hidden">{phoneNumber}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline print:hidden"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <Linkedin className="h-4 w-4 flex-shrink-0" />
                    <span className="print:inline hidden">LinkedIn Profile</span>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline print:hidden"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-4 sm:p-6 print:p-4 grid gap-4 dark:text-gray-100">
              {/* Professional Summary */}
              <section>
                <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">
                  Professional Summary
                </h3>
                <p className="text-sm">
                  Detail-oriented and ethical External Auditor with experience in financial statement reviews, risk
                  assessment, and internal control evaluation. Strong analytical and critical-thinking skills with a
                  commitment to ensuring compliance with IFRS, GAAP, and regulatory standards. Adept at managing
                  multiple audit engagements and delivering comprehensive, unbiased audit reports that enhance financial
                  transparency and accountability.
                </p>
              </section>

              <Separator className="dark:bg-gray-600" />

              {/* Professional Experience */}
              <section>
                <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">
                  Professional Experience
                </h3>
                <div>
                  <div className="flex flex-col sm:flex-row justify-between mb-1">
                    <h4 className="font-medium">Audit Associate</h4>
                    <div className="text-sm text-muted-foreground dark:text-gray-400">June 2023 – Present</div>
                  </div>
                  <div className="text-sm font-medium mb-2">Forvis Mazars, Karachi, Pakistan</div>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Conduct financial statement audits to ensure accuracy and compliance with IFRS and GAAP.</li>
                    <li>
                      Assess financial, operational, and compliance risks to support organizational risk management
                      strategies.
                    </li>
                    <li>Evaluate internal control mechanisms, identifying weaknesses and recommending enhancements.</li>
                    <li>
                      Ensure regulatory compliance by verifying adherence to relevant financial laws and industry
                      standards.
                    </li>
                    <li>
                      Provide independent audit opinions to enhance financial transparency and stakeholder confidence.
                    </li>
                  </ul>

                  <div className="mt-2">
                    <h5 className="text-sm font-medium mb-1">Key Achievements</h5>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>
                        Successfully led and completed audits for over{" "}
                        <span className="font-medium">15 high-profile clients</span> in the financial services sector.
                      </li>
                      <li>
                        Identified internal control weaknesses for a major retail client, leading to a{" "}
                        <span className="font-medium">20% reduction in errors</span> and improved financial reporting
                        accuracy.
                      </li>
                      <li>
                        Recommended supply chain improvements for a manufacturing client, resulting in a{" "}
                        <span className="font-medium">15% reduction in operating costs</span> and a{" "}
                        <span className="font-medium">10% increase in profit margins</span>.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="dark:bg-gray-600" />

              {/* Two-column layout for Skills and Education/Languages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left column */}
                <div className="md:col-span-2 space-y-4">
                  {/* Skills */}
                  <section>
                    <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">Skills</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <h4 className="text-sm font-medium">Accounting & Auditing</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            IFRS
                          </Badge>
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            GAAP
                          </Badge>
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Financial Statement Analysis
                          </Badge>
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Internal Controls
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Risk Assessment & Compliance</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Regulatory Audits
                          </Badge>
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Fraud Detection
                          </Badge>
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Financial Risk Evaluation
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Technical Proficiency</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Auditing Software
                          </Badge>
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            Data Analysis Tools
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Industry Expertise */}
                  <section>
                    <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">
                      Industry Expertise
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <Badge className="dark:bg-primary/20 dark:text-primary-foreground">Financial Services</Badge>
                      <Badge className="dark:bg-primary/20 dark:text-primary-foreground">Manufacturing & Retail</Badge>
                      <Badge className="dark:bg-primary/20 dark:text-primary-foreground">
                        Government & Public Sector
                      </Badge>
                      <Badge className="dark:bg-primary/20 dark:text-primary-foreground">
                        Construction & Real Estate
                      </Badge>
                    </div>
                  </section>
                </div>

                {/* Right column */}
                <div className="space-y-4">
                  {/* Education */}
                  <section>
                    <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">Education</h3>
                    <div>
                      <h4 className="text-sm font-medium">Intermediate, Pre-Engineering</h4>
                      <p className="text-sm">Pakistan Shipowners' Government College</p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">January 2019 – August 2022</p>
                    </div>
                  </section>

                  {/* Languages */}
                  <section>
                    <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">Languages</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>English</span>
                        <span className="text-muted-foreground dark:text-gray-400">Native Proficiency</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Urdu</span>
                        <span className="text-muted-foreground dark:text-gray-400">Native Proficiency</span>
                      </div>
                    </div>
                  </section>

                  {/* Strengths */}
                  <section>
                    <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">Strengths</h3>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Ethical Judgment:</span> High integrity and professionalism in all
                        audit processes.
                      </li>
                      <li>
                        <span className="font-medium">Process Improvement:</span> Strong ability to identify
                        inefficiencies and recommend solutions.
                      </li>
                      <li>
                        <span className="font-medium">Leadership & Teamwork:</span> Effective collaboration and project
                        leadership.
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5cm;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            background-color: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:inline {
            display: inline !important;
          }
          img[src^="https://"] {
            visibility: visible !important;
          }
        }
      `}</style>
    </div>
  )
}

