import { cn } from '@/lib/utils';

type WaveFieldProps = {
  className?: string;
};

export function WaveField({ className }: WaveFieldProps) {
  return (
    <svg
      className={cn('h-full w-full', className)}
      viewBox="0 0 1440 2200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bg-gradient" x1="720" y1="0" x2="720" y2="2200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#071018" />
          <stop offset="0.55" stopColor="#040b12" />
          <stop offset="1" stopColor="#02070d" />
        </linearGradient>
        <radialGradient id="cyan-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(920 340) rotate(90) scale(540 760)">
          <stop offset="0" stopColor="rgba(98,235,222,0.18)" />
          <stop offset="1" stopColor="rgba(98,235,222,0)" />
        </radialGradient>
        <radialGradient id="magenta-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(360 760) rotate(90) scale(420 640)">
          <stop offset="0" stopColor="rgba(241,107,183,0.12)" />
          <stop offset="1" stopColor="rgba(241,107,183,0)" />
        </radialGradient>
      </defs>

      <rect width="1440" height="2200" fill="url(#bg-gradient)" />
      <rect width="1440" height="2200" fill="url(#cyan-halo)" />
      <rect width="1440" height="2200" fill="url(#magenta-halo)" />

      <path
        fill="rgba(98, 235, 222, 0.06)"
        d="M-240 1180C-40 1110 120 1260 340 1180C520 1115 760 1325 980 1240C1160 1170 1330 1270 1680 1160V2200H-240Z"
      >
        <animate
          attributeName="d"
          dur="20s"
          repeatCount="indefinite"
          values="
            M-240 1180C-40 1110 120 1260 340 1180C520 1115 760 1325 980 1240C1160 1170 1330 1270 1680 1160V2200H-240Z;
            M-240 1150C-10 1240 160 1100 340 1200C560 1320 780 1110 980 1220C1180 1330 1380 1190 1680 1230V2200H-240Z;
            M-240 1180C-40 1110 120 1260 340 1180C520 1115 760 1325 980 1240C1160 1170 1330 1270 1680 1160V2200H-240Z
          "
        />
      </path>
      <path
        fill="rgba(98, 235, 222, 0.11)"
        d="M-240 1290C0 1210 200 1380 420 1300C660 1215 860 1430 1070 1350C1260 1280 1460 1370 1680 1320V2200H-240Z"
      >
        <animate
          attributeName="d"
          dur="26s"
          repeatCount="indefinite"
          values="
            M-240 1290C0 1210 200 1380 420 1300C660 1215 860 1430 1070 1350C1260 1280 1460 1370 1680 1320V2200H-240Z;
            M-240 1330C20 1420 230 1250 430 1360C650 1470 880 1260 1090 1330C1300 1400 1480 1300 1680 1390V2200H-240Z;
            M-240 1290C0 1210 200 1380 420 1300C660 1215 860 1430 1070 1350C1260 1280 1460 1370 1680 1320V2200H-240Z
          "
        />
      </path>
      <path
        fill="rgba(98, 235, 222, 0.17)"
        d="M-240 1420C40 1340 240 1510 500 1430C720 1360 950 1540 1180 1460C1380 1385 1530 1490 1680 1450V2200H-240Z"
      >
        <animate
          attributeName="d"
          dur="32s"
          repeatCount="indefinite"
          values="
            M-240 1420C40 1340 240 1510 500 1430C720 1360 950 1540 1180 1460C1380 1385 1530 1490 1680 1450V2200H-240Z;
            M-240 1460C20 1560 280 1390 520 1490C760 1590 980 1400 1210 1490C1410 1560 1560 1440 1680 1520V2200H-240Z;
            M-240 1420C40 1340 240 1510 500 1430C720 1360 950 1540 1180 1460C1380 1385 1530 1490 1680 1450V2200H-240Z
          "
        />
      </path>
    </svg>
  );
}
