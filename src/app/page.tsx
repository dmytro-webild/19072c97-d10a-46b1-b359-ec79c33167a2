"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Shield, Star, Wrench, Award, TrendingUp, Clock, Users, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="none"
      cardStyle="soft-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="GP Avto"
          navItems={[
            { name: "Zakaj GP Avto", id: "why" },
            { name: "Storitve", id: "services" },
            { name: "Mnenja", id: "testimonials" },
            { name: "O nas", id: "about" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{
            text: "Pokličite: +386 1 234 5678",            href: "tel:+38612345678"
          }}
          buttonClassName="bg-gradient-to-r from-[#1b0c25] to-[#ff93e4] text-white font-bold"
          buttonTextClassName="font-bold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Zanesljiv avtoservis, na katerega se lahko zanesete"
          description="Strokoven servis, poštene cene in več kot 20 let zadovoljnih strank. Naš cilj je vaš avtomobil ohraniti v najboljšem stanju."
          tag="Lokalni avtoservis"
          tagIcon={Shield}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Pokličite zdaj", href: "tel:+38612345678" },
            { text: "Pošljite povpraševanje", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/serviceman-car-service-using-holographic-augmented-reality-show-customer-defective-vehicle-piston-hardworking-garage-employee-using-innovative-ar-tech-project-automobile-parts-woman_482257-74243.jpg?_wi=1"
          imageAlt="GP Avto delavnica"
          ariaLabel="GP Avto hero section"
        />
      </div>

      <div id="why" data-section="why">
        <FeatureCardMedia
          title="Zakaj izbrati GP Avto"
          description="Ponujamo strokovnost, poštene cene in dolgoletne izkušnje v avtomobilizmu."
          tag="Naše prednosti"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "expertise",              title: "Strokoven servis",              description: "Dolgoletne izkušnje in profesionalno opravljeno delo. Vaš avtomobil je v najboljših rokah.",              tag: "Strokovnost",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-using-laptop-while-servicing-car-engine_1170-1334.jpg?_wi=1",              imageAlt: "diagnostic scanner vehicle testing"
            },
            {
              id: "pricing",              title: "Poštene cene",              description: "Transparentne in ugodne cene brez presenečenj. Vedno vas obvestimo pred delom.",              tag: "Cena",              imageSrc: "http://img.b2bpic.net/free-photo/coworkers-car-service-using-professional-mechanical-tool-repair-broken-engine-efficient-workers-garage-repairing-client-automobile-ensuring-optimal-automotive-performance-close-up_482257-73057.jpg?_wi=1",              imageAlt: "oil change service car maintenance"
            },
            {
              id: "warranty",              title: "Garancija",              description: "Na vsako opravljeno delo dobite garancijo. Vaša varnost je naša prioriteta.",              tag: "Zavarovanje",              imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-repairing-car_1170-1620.jpg?_wi=1",              imageAlt: "brake service repair professional mechanic"
            },
            {
              id: "relationship",              title: "Prijazen odnos",              description: "Stranke cenijo korekten odnos in prilagodljivost. Dolgoročno sodelovanje je naš cilj.",              tag: "Zaupanje",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-car-service-ordering-new-lights-system-damaged-vehicle-using-tablet-worker-client-looking-online-components-replace-old-ones-malfunctioning-automobile_482257-73065.jpg?_wi=1",              imageAlt: "vehicle inspection technical check"
            }
          ]}
          animationType="slide-up"
          carouselMode="buttons"
          ariaLabel="GP Avto advantages section"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardThree
          title="Naše storitve"
          description="Ponujamo kompletan spekter avtoservisnih storitev za vaš avtomobil."
          tag="Storitve"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "service-oil",              name: "Redni servis vozil",              price: "Od €60",              imageSrc: "http://img.b2bpic.net/free-photo/coworkers-car-service-using-professional-mechanical-tool-repair-broken-engine-efficient-workers-garage-repairing-client-automobile-ensuring-optimal-automotive-performance-close-up_482257-73057.jpg?_wi=2",              imageAlt: "oil change service car maintenance"
            },
            {
              id: "service-brake",              name: "Menjava zavor",              price: "Od €120",              imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-repairing-car_1170-1620.jpg?_wi=2",              imageAlt: "brake service repair professional mechanic"
            },
            {
              id: "service-diagnostic",              name: "Diagnostika vozil",              price: "Od €40",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-using-laptop-while-servicing-car-engine_1170-1334.jpg?_wi=2",              imageAlt: "diagnostic scanner vehicle testing"
            },
            {
              id: "service-filter",              name: "Menjava filtrov",              price: "Od €30",              imageSrc: "http://img.b2bpic.net/free-photo/coworkers-car-service-using-professional-mechanical-tool-repair-broken-engine-efficient-workers-garage-repairing-client-automobile-ensuring-optimal-automotive-performance-close-up_482257-73057.jpg?_wi=3",              imageAlt: "oil change service car maintenance"
            },
            {
              id: "service-inspection",              name: "Tehnični pregled",              price: "Od €50",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-car-service-ordering-new-lights-system-damaged-vehicle-using-tablet-worker-client-looking-online-components-replace-old-ones-malfunctioning-automobile_482257-73065.jpg?_wi=2",              imageAlt: "vehicle inspection technical check"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          ariaLabel="GP Avto services section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Jernej Bravc",              imageSrc: "http://img.b2bpic.net/free-photo/group-friends-having-good-time_23-2148395332.jpg",              imageAlt: "satisfied customer happy client smiling"
            },
            {
              id: "2",              name: "Tomaž Janžekovič",              imageSrc: "http://img.b2bpic.net/free-photo/young-man-emotions_1303-14595.jpg",              imageAlt: "professional male portrait confident"
            },
            {
              id: "3",              name: "Rok The Rock",              imageSrc: "http://img.b2bpic.net/free-psd/smiling-camera-with-crossed-arms-happy-confident-satisfied-expression-lateral-view_1194-632989.jpg",              imageAlt: "professional woman portrait confident"
            },
            {
              id: "4",              name: "Simon Jeranovič",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",              imageAlt: "friendly professional male portrait"
            },
            {
              id: "5",              name: "Zadovoljna stranka",              imageSrc: "http://img.b2bpic.net/free-photo/business-woman-with-crossed-arms-smiling_23-2148095677.jpg",              imageAlt: "professional woman business portrait"
            },
            {
              id: "6",              name: "Ponos GP Avta",              imageSrc: "http://img.b2bpic.net/free-photo/happy-man-showing-ok-sign_23-2148221723.jpg",              imageAlt: "professional male business portrait"
            }
          ]}
          cardTitle="Mnenja strank"
          cardTag="Odličnih 20+ let"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="O servisu"
          description="GP Avto vodi Gregor Ploj, ki že vrsto let skrbi za zanesljiv in pošten servis vozil. Stranke cenijo našo strokovnost, prijaznost, prilagodljivost in korekten odnos."
          tag="Izkušnje"
          tagIcon={Award}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/young-loader-uniform-holding-cup-turkish-coffee-front-view_176474-21389.jpg"
          imageAlt="Gregor Ploj - lastnik GP Avta"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Strokovnost",              description: "Dolgoletnе izkušnje v avtomobilizmu.",              icon: CheckCircle
            },
            {
              title: "Prijaznost",              description: "Osebni pristop k vsakemu strancu.",              icon: CheckCircle
            },
            {
              title: "Prilagodljivost",              description: "Hitro reagiramo na vaše potrebe.",              icon: CheckCircle
            },
            {
              title: "Korekten odnos",              description: "Več kot 20 let zadovoljnih strank.",              icon: CheckCircle
            }
          ]}
          ariaLabel="About GP Avto section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Naši dosežki"
          description="Dolgoletnе izkušnje in zadovoljne stranke govorijo sami zase."
          tag="Dokazana kakovost"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            {
              id: "years",              value: "20+",              title: "Let izkušenj",              description: "Zanesljiv servis vozil",              icon: Clock
            },
            {
              id: "customers",              value: "1000+",              title: "Zadovoljnih strank",              description: "Dolgoročni odnosi",              icon: Users
            },
            {
              id: "rating",              value: "5/5",              title: "Povprečna ocena",              description: "Google ocene",              icon: Star
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          ariaLabel="Metrics section"
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactText
          text="Potrebujete servis ali pregled vozila? Pokličite zdaj ali nam pošljite povpraševanje. Odgovorimo hitro in se držimo dogovorjenih terminov."
          animationType="background-highlight"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Pokličite zdaj", href: "tel:+38612345678" },
            { text: "Pošljite povpraševanje", href: "#contact" }
          ]}
          ariaLabel="Call to action section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/serviceman-car-service-using-holographic-augmented-reality-show-customer-defective-vehicle-piston-hardworking-garage-employee-using-innovative-ar-tech-project-automobile-parts-woman_482257-74243.jpg?_wi=2"
          imageAlt="GP Avto delavnica"
          logoText="GP Avto"
          copyrightText="© 2025 GP Avto | Zanesljiv avtoservis"
          columns={[
            {
              title: "Navigacija",              items: [
                { label: "Zakaj GP Avto", href: "#why" },
                { label: "Storitve", href: "#services" },
                { label: "Mnenja", href: "#testimonials" },
                { label: "O nas", href: "#about" }
              ]
            },
            {
              title: "Kontakt",              items: [
                { label: "Telefon: +386 1 234 5678", href: "tel:+38612345678" },
                { label: "Email: info@gpavto.si", href: "mailto:info@gpavto.si" },
                { label: "Lokacija", href: "#contact" },
                { label: "Delovni čas", href: "#contact" }
              ]
            },
            {
              title: "Pravni napotki",              items: [
                { label: "Pogoji uporabe", href: "#" },
                { label: "Politika zasebnosti", href: "#" },
                { label: "Piškotki", href: "#" }
              ]
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}