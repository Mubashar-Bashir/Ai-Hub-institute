"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from 'react';

const images = [
  "https://picsum.photos/1200/400",
  "https://picsum.photos/1200/401",
  "https://picsum.photos/1200/402",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [images.length]);

  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Prototype an app with AI
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn AI and build the future.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Explore Programs</Button>
          <Button variant="outline" size="lg">Apply Now</Button>
        </div>
        <div className="mt-8">
          <Image
            src={images[currentImageIndex]}
            alt="AI-HUB Institute Hero Image"
            width={1200}
            height={400}
            className="rounded-lg shadow-md"
            key={currentImageIndex} // Add key to force re-render on image change
          />
        </div>
      </section>

      {/* Key Offerings */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Key Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Fundamentals</CardTitle>
              <CardDescription>Master the basics of artificial intelligence.</CardDescription>
            </CardHeader>
            <CardContent>
              Learn about machine learning, deep learning, and neural networks.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Science</CardTitle>
              <CardDescription>Unlock insights from data with our comprehensive program.</CardDescription>
            </CardHeader>
            <CardContent>
              Explore data analysis, visualization, and statistical modeling.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Ethics</CardTitle>
              <CardDescription>Understand the ethical implications of AI.</CardDescription>
            </CardHeader>
            <CardContent>
              Discuss fairness, accountability, and transparency in AI.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why AI-HUB? */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Why AI-HUB?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-muted-foreground">
              AI-HUB Institute is dedicated to providing cutting-edge education in artificial intelligence.
              Our programs are designed to equip students with the knowledge and skills they need to succeed in the rapidly evolving field of AI.
            </p>
            <ul className="list-disc pl-5 mt-4 text-muted-foreground">
              <li>Expert Faculty</li>
              <li>Hands-on Projects</li>
              <li>Career-Focused Curriculum</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://picsum.photos/600/400"
              alt="AI-HUB Institute Facilities"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* News/Events Highlights */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Workshop</CardTitle>
              <CardDescription>Learn the latest AI techniques.</CardDescription>
            </CardHeader>
            <CardContent>
              Join us for a hands-on workshop on November 15th.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Research Published</CardTitle>
              <CardDescription>Our faculty published groundbreaking research.</CardDescription>
            </CardHeader>
            <CardContent>
              Read about our latest findings in AI.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials/Partner Logos */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Testimonials</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </section>
    </div>
  );
}
