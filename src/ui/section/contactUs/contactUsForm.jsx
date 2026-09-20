'use client';

import { ApplicationContext } from "@/context/applicationContext";
import classNames from "classnames";
import Image from "next/image";
import Script from "next/script";
import { Orbitron } from "next/font/google";
import { useContext, useRef, useState } from "react";

const developmentTypes = ["webDevelopment", "mobileDevelopment", "productDesign"];
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], display: "swap" });

export default function ContactUsForm() {
  const { dictionary, language } = useContext(ApplicationContext);
  const [selectedType, setSelectedType] = useState(developmentTypes[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("status");
  const captchaWidget = useRef(null);
  const formRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const messages = language === "en"
    ? {
        send: "Send message",
        sending: "Sending…",
        success: "Your message was sent.",
        failure: "We could not send your message. Please try again.",
        captcha: "Please complete the CAPTCHA challenge.",
        service: "Service type",
      }
    : {
        send: "Mesaj gönder",
        sending: "Gönderiliyor…",
        success: "Mesajınız gönderildi.",
        failure: "Mesajınız gönderilemedi. Lütfen tekrar deneyin.",
        captcha: "Lütfen CAPTCHA doğrulamasını tamamlayın.",
        service: "Hizmet türü",
      };

  const renderCaptcha = () => {
    if (!siteKey || captchaWidget.current !== null || !window.grecaptcha) return;
    captchaWidget.current = window.grecaptcha.render("recaptcha-container", {
      sitekey: siteKey,
      hl: language,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setStatusType("status");
    const formData = new FormData(event.currentTarget);
    const captchaToken = window.grecaptcha?.getResponse(captchaWidget.current) || "";

    if (siteKey && !captchaToken) {
      setStatus(messages.captcha);
      setStatusType("alert");
      document.getElementById("recaptcha-container")?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          details: formData.get("details"),
          developmentType: selectedType,
          captchaToken,
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");
      formRef.current?.reset();
      window.grecaptcha?.reset(captchaWidget.current);
      setStatus(messages.success);
      setStatusType("status");
    } catch {
      setStatus(messages.failure);
      setStatusType("alert");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {siteKey ? (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="lazyOnload"
          onLoad={renderCaptcha}
        />
      ) : null}
      <form
        ref={formRef}
        className={`${orbitron.className} flex w-full flex-col items-start gap-5 overflow-x-clip whitespace-pre-wrap`}
        onSubmit={handleSubmit}
        aria-describedby="contact-status"
        aria-busy={isSubmitting}
      >
        <h3 className="max-w-[90vw] text-wrap pl-2 text-center text-2xl text-[#3f3f3f] md:pl-0 md:text-3xl">
          {dictionary.landingPage.contactUs.WCDFY}
        </h3>
        <div className="grid w-full grid-cols-12 gap-2 md:gap-10">
          <div className="col-span-full flex flex-col items-center justify-start gap-5 md:items-start lg:col-span-6">
            <fieldset className="mb-5 flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-6">
              <legend className="sr-only">{messages.service}</legend>
              {developmentTypes.map((type) => (
                <label
                  key={type}
                  className={classNames(
                    "inline-flex min-h-11 cursor-pointer items-center rounded-3xl border border-gray-400 px-6 py-3 text-lg text-[#3f3f3f] hover:bg-[#3f3f3f] hover:text-white has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#147a3a]",
                    { "bg-[#3f3f3f] text-white": selectedType === type },
                  )}
                >
                  <input
                    className="sr-only"
                    type="radio"
                    name="developmentType"
                    value={type}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                  />
                  {dictionary.landingPage.contactUs[type]}
                </label>
              ))}
            </fieldset>

            <div className="w-full">
              <label htmlFor="contact-name" className="block font-medium text-[#3f3f3f]">
                {dictionary.landingPage.contactUs.name}
              </label>
              <input
                id="contact-name"
                className="mt-1 w-full max-w-xs border-b border-b-[#3f3f3f] px-1 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary md:max-w-none"
                name="name"
                autoComplete="name"
                type="text"
                minLength={2}
                maxLength={100}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="contact-email" className="block font-medium text-[#3f3f3f]">
                {dictionary.landingPage.contactUs.email}
              </label>
              <input
                id="contact-email"
                className="mt-1 w-full max-w-xs border-b border-b-[#3f3f3f] px-1 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary md:max-w-none"
                name="email"
                autoComplete="email"
                type="email"
                maxLength={254}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="contact-details" className="block font-medium text-[#3f3f3f]">
                {dictionary.landingPage.contactUs.projectDetail}
              </label>
              <textarea
                id="contact-details"
                className="mt-1 w-full max-w-xs border-b border-b-[#3f3f3f] px-1 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary md:max-w-none"
                name="details"
                minLength={10}
                maxLength={3000}
                required
                rows={4}
              />
            </div>
            {siteKey ? <div id="recaptcha-container" tabIndex={-1} /> : null}
            <p id="contact-status" role={statusType} aria-live={statusType === "alert" ? "assertive" : "polite"} className="min-h-6 text-sm font-medium text-gray-800">
              {status}
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-11 items-center gap-3 rounded-3xl bg-[#147a3a] px-8 py-3 text-lg text-white hover:bg-[#0f5f2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laodicea-secondary disabled:cursor-wait disabled:opacity-60"
            >
              <span>{isSubmitting ? messages.sending : messages.send}</span>
              <Image src="/vectors/arrow-trape.svg" alt="" width={58} height={20} />
            </button>
          </div>
          <div className="col-span-full mb-5 flex flex-col justify-between p-5 lg:col-span-6">
            <div aria-hidden="true" className="flex justify-center">
              <Image width={196} height={207} src="/vectors/grid-primary.svg" alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold text-[#595959]">{dictionary.landingPage.contactUs.email}</h3>
              <a className="text-xl text-[#3f3f3f] underline underline-offset-4" href="mailto:hello@laodiceasolutions.com">
                hello@laodiceasolutions.com
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
