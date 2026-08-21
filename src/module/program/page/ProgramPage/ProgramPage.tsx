import clsx from 'clsx';
import { ChevronDown, Clock3, Compass, Film, Map, Star } from 'lucide-react';
import { DOME_PROGRAM } from '../../data/domeProgram';
import { EXCURSIONS, OTHER_LOCATIONS, PROGRAM } from '../../data/program';
import s from './ProgramPage.module.css';

export function ProgramPage() {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Програма фестивалю</h1>

      <div className={s.days}>
        {PROGRAM.map((day) => (
          <details key={day.id} className={s.day}>
            <summary className={s.dayHeader}>
              <span className={s.dayBadge}>{day.badge}</span>
              <div className={s.dayMeta}>
                <p className={s.dayWeekday}>{day.weekday}</p>
                <h2 className={s.dayTitle}>{day.date}</h2>
              </div>
              <ChevronDown className={s.chevron} aria-hidden="true" />
            </summary>

            <div className={s.spaces}>
              {day.spaces.map((space) => {
                const Icon = space.icon;
                return (
                  <div
                    key={space.id}
                    className={clsx(s.space, space.featured && s.spaceFeatured)}
                  >
                    <h3 className={s.spaceTitle}>
                      <span
                        className={clsx(
                          s.spaceIcon,
                          space.featured && s.spaceIconFeatured
                        )}
                      >
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      {space.title}
                    </h3>

                    <ul className={s.events}>
                      {space.events.map((event) => (
                        <li key={`${space.id}-${event.time}-${event.title}`}>
                          <time
                            className={s.eventTime}
                            dateTime={`${day.isoDate}T${event.time}`}
                          >
                            {event.time}
                          </time>
                          <div className={s.eventBody}>
                            <p className={s.eventTitle}>{event.title}</p>
                            {event.description ? (
                              <p className={s.eventDesc}>{event.description}</p>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </details>
        ))}

        <details className={s.day}>
          <summary className={s.dayHeader}>
            <span className={s.dayBadge}>
              <Film size={20} aria-hidden="true" />
            </span>
            <div className={s.dayMeta}>
              <p className={s.dayWeekday}>22–23 серпня • субота та неділя</p>
              <h2 className={s.dayTitle}>Арт-простір і сферичний кінотеатр</h2>
            </div>
            <ChevronDown className={s.chevron} aria-hidden="true" />
          </summary>

          <div className={s.shows}>
            <div className={s.gallerySection}>
              <h3 className={s.galleryHeader}>
                <Compass size={18} aria-hidden="true" />
                Екскурсії галереями •
                <span className={s.gallerySchedule}>щогодини</span>
              </h3>
              <div className={s.galleryExhibits}>
                <div className={s.galleryExhibit}>
                  <span className={s.galleryDot} />
                  <p className={s.galleryExhibitTitle}>«Містичний Всесвіт»</p>
                </div>
                <div className={s.galleryExhibit}>
                  <span className={s.galleryDot} />
                  <p className={s.galleryExhibitTitle}>«Самскара»</p>
                </div>
              </div>
            </div>

            <div className={s.filmsSection}>
              <h3 className={s.filmsHeader}>
                <Film size={18} aria-hidden="true" />
                Фільми у сферичному кінотеатрі
              </h3>
              <p className={s.filmsIntro}>
                Упродовж фестивалю демонструватимуться фільми для дітей та
                дорослих:
              </p>

              {DOME_PROGRAM.map((show) => (
                <article key={show.id} className={s.show}>
                  <h3 className={s.showTitle}>{show.title}</h3>
                  <img
                    src={show.image}
                    alt={show.imageAlt}
                    className={s.showImage}
                    loading="lazy"
                  />
                  <dl className={s.showMeta}>
                    <div className={s.showMetaItem}>
                      <dt>
                        <Star size={14} aria-hidden="true" />
                        <span className={s.srOnly}>Рік випуску</span>
                      </dt>
                      <dd>{show.year}</dd>
                    </div>
                    <div className={s.showMetaItem}>
                      <dt>
                        <Film size={14} aria-hidden="true" />
                        <span className={s.srOnly}>Жанр</span>
                      </dt>
                      <dd>{show.genre}</dd>
                    </div>
                    <div className={s.showMetaItem}>
                      <dt>
                        <Clock3 size={14} aria-hidden="true" />
                        <span className={s.srOnly}>Тривалість</span>
                      </dt>
                      <dd>{show.duration}</dd>
                    </div>
                  </dl>
                  <p className={s.showDesc}>{show.description}</p>
                </article>
              ))}
            </div>
          </div>
        </details>

        <details className={s.day}>
          <summary className={s.dayHeader}>
            <span className={s.dayBadge}>
              <Compass size={20} aria-hidden="true" />
            </span>
            <div className={s.dayMeta}>
              <p className={s.dayWeekday}>22–23 серпня • щогодини</p>
              <h2 className={s.dayTitle}>Екскурсії</h2>
            </div>
            <ChevronDown className={s.chevron} aria-hidden="true" />
          </summary>

          <div className={s.spaces}>
            <div className={s.space}>
              <ul className={s.events}>
                {EXCURSIONS.map((excursion) => (
                  <li key={excursion.title}>
                    <div className={s.eventBody}>
                      <p className={s.eventTitle}>{excursion.title}</p>
                      <p className={s.eventDesc}>
                        <strong>{excursion.subtitle}</strong>
                        <br />
                        {excursion.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        <details className={s.day}>
          <summary className={s.dayHeader}>
            <span className={s.dayBadge}>
              <Map size={20} aria-hidden="true" />
            </span>
            <div className={s.dayMeta}>
              <p className={s.dayWeekday}>Всі дні</p>
              <h2 className={s.dayTitle}>Інші локації</h2>
            </div>
            <ChevronDown className={s.chevron} aria-hidden="true" />
          </summary>

          <div className={s.spaces}>
            <div className={s.space}>
              <ul className={s.events}>
                {OTHER_LOCATIONS.map((location) => (
                  <li key={location.title}>
                    <div className={s.eventBody}>
                      <p className={s.eventTitle}>{location.title}</p>
                      <p className={s.eventDesc}>{location.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
