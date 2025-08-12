import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchSeed, incrementBy, reset } from "@/slices/counterSlice";
import { Card, CardContent, CardHeader } from "@/components/ui";
import Button from "@/components/ui/Button";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { value, loading, error } = useAppSelector((s) => s.counter);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Home</h1>
      <Card>
        <CardHeader>
          <p className="text-sm text-gray-500">Current Value</p>
          <p className="mt-1 text-4xl font-bold">{value}</p>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => dispatch(incrementBy(1))}>+1</Button>
            <Button variant="outline" onClick={() => dispatch(incrementBy(5))}>+5</Button>
            <Button variant="outline" onClick={() => dispatch(reset())}>Reset</Button>
            <Button onClick={() => dispatch(fetchSeed())} disabled={loading}>
              {loading ? "Loading..." : "Fetch Seed"}
            </Button>
          </div>
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
