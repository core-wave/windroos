import { Apartment, ChildBed } from "@/lib/schemas";

interface EmailTemplateProps {
  name: string;
  email: string;
  date_from: string;
  date_to: string;
  apartment: Apartment;
  childBed: ChildBed;
  guests: number;
  message?: string;
  phone?: string;
}

export function EmailTemplate({
  name,
  email,
  date_from,
  date_to,
  apartment,
  childBed,
  guests,
  message,
  phone,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Nieuwe Reserveringsaanvraag</h1>
      <table>
        <tr>
          <td className="font-semibold">Email</td>
          <td className="font-semibold">{email}</td>
        </tr>
        <tr>
          <td className="font-semibold">Naam</td>
          <td className="font-semibold">{name}</td>
        </tr>
        <tr>
          <td className="font-semibold">Telefoon</td>
          <td className="font-semibold">{phone ?? "Niet opgegeven"}</td>
        </tr>
        <tr>
          <td className="font-semibold">Van</td>
          <td className="font-semibold">{date_from}</td>
        </tr>
        <tr>
          <td className="font-semibold">Tot</td>
          <td className="font-semibold">{date_to}</td>
        </tr>
        <tr>
          <td className="font-semibold">Apartement(en)</td>
          <td className="font-semibold">
            {apartment == "east"
              ? "Oost"
              : apartment == "west"
                ? "West"
                : "Beide"}
          </td>
        </tr>
        <tr>
          <td className="font-semibold">Kinderbedje(s)</td>
          <td className="font-semibold">
            {childBed == "east"
              ? "Oost"
              : childBed == "west"
                ? "West"
                : childBed == "no"
                  ? "Nee"
                  : childBed == "yes"
                    ? "Ja"
                    : "Beide"}
          </td>
        </tr>
        <tr>
          <td className="font-semibold">Gasten</td>
          <td className="font-semibold">{guests}</td>
        </tr>
        <tr>
          <td className="font-semibold">Bericht</td>
          <td className="font-semibold">{message}</td>
        </tr>
      </table>
    </div>
  );
}
