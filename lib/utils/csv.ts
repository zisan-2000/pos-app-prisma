export function toCsv(rows: Array<Record<string, unknown>>) {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const lines = rows.map((row) =>
    headers.map((key) => JSON.stringify(row[key] ?? "")).join(",")
  );
  return [headers.join(","), ...lines].join("\n");
}

