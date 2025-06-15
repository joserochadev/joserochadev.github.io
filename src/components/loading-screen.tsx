export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-[#6900ff]" />
    </div>
  );
}
