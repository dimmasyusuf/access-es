export default function YoutubeVideo() {
  return (
    <section className="flex items-center justify-center max-w-screen-xl w-full px-6 sm:px-8 lg:px-16">
      <div className="flex items-center justify-center py-8 w-full">
        <iframe
          src="https://www.youtube.com/embed/iUXHaf1TRIo?si=kR_JQaFXAkesixrt"
          title="Access English School Profile Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
          loading="lazy"
          className="w-full max-h-[494px] aspect-square rounded-xl border-none"
        />
      </div>
    </section>
  );
}
