import { Icon } from "@/components/ui/Icon";

export default function SocialIcons() {
  return (
    <div className="flex gap-3">
      <a aria-label="GitHub" href="https://github.com/you" className="text-gray-500 hover:text-gray-900">
        <Icon name="github" className="h-5 w-5" />
      </a>
      <a aria-label="X" href="https://x.com/you" className="text-gray-500 hover:text-gray-900">
        <Icon name="twitter" className="h-5 w-5" />
      </a>
      <a aria-label="LinkedIn" href="https://linkedin.com/in/you" className="text-gray-500 hover:text-gray-900">
        <Icon name="linkedin" className="h-5 w-5" />
      </a>
    </div>
  );
}
