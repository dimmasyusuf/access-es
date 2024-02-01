export default function YoutubeVideo() {
  return (
    <section className="flex items-center justify-center max-w-screen-xl w-full px-6 sm:px-8 md:px-0">
      <div className="flex items-center justify-center py-10 w-full">
        <iframe
          src="https://www.youtube.com/embed/iUXHaf1TRIo?si=kR_JQaFXAkesixrt"
          title="Access English School Profile Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
          loading="lazy"
          className="w-full max-h-[549px] aspect-square rounded-xl border-none"
        />
      </div>
    </section>
  );
}
