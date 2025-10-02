import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notes } from "@/data/notes";

export default function NotePage() {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return <Navigate to="/notes" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <FadeIn>
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/notes" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to notes
              </Link>
            </Button>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time>{new Date(note.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{note.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {note.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {note.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index}>{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index}>{line.substring(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index}>{line.substring(4)}</h3>;
                } else if (line.startsWith('- ')) {
                  return <li key={index}>{line.substring(2)}</li>;
                } else if (line.trim() === '') {
                  return <br key={index} />;
                } else {
                  return <p key={index}>{line}</p>;
                }
              })}
            </div>
          </FadeIn>
        </article>
      </main>
      <Footer />
    </div>
  );
}
