export function DecorativeShapes() {
  return (
    <>
      {/* Forme africaine - bas gauche */}
      <div className="absolute bottom-20 left-10 hidden rotate-12 opacity-10 lg:block">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 0L64.6447 14.6447H85.3553V35.3553L100 50L85.3553 64.6447V85.3553H64.6447L50 100L35.3553 85.3553H14.6447V64.6447L0 50L14.6447 35.3553V14.6447H35.3553L50 0Z"
            className="fill-primary"
          />
        </svg>
      </div>

      {/* Forme africaine - haut droite */}
      <div className="absolute right-10 top-40 hidden -rotate-12 opacity-10 lg:block">
        <svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z"
            className="fill-accent"
          />
        </svg>
      </div>
    </>
  )
}
