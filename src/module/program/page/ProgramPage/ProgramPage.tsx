import clsx from 'clsx';
import { ChevronDown, Clock3, Film, Spotlight, Star } from 'lucide-react';
import { DOME_PROGRAM } from '../../data/domeProgram';
import { PROGRAM } from '../../data/program';
import styles from './ProgramPage.module.css';

export function ProgramPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Програма фестивалю</h1>

      <div className={styles.days}>
        {PROGRAM.map((day) => (
          <details key={day.id} className={styles.day}>
            <summary className={styles.dayHeader}>
              <span className={styles.dayBadge}>{day.badge}</span>
              <div className={styles.dayMeta}>
                <p className={styles.dayWeekday}>{day.weekday}</p>
                <h2 className={styles.dayTitle}>{day.date}</h2>
              </div>
              <ChevronDown className={styles.chevron} aria-hidden="true" />
            </summary>

            <div className={styles.spaces}>
              {day.spaces.map((space) => {
                const Icon = space.icon;
                return (
                  <div
                    key={space.id}
                    className={clsx(
                      styles.space,
                      space.featured && styles.spaceFeatured
                    )}
                  >
                    <h3 className={styles.spaceTitle}>
                      <span
                        className={clsx(
                          styles.spaceIcon,
                          space.featured && styles.spaceIconFeatured
                        )}
                      >
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      {space.title}
                    </h3>

                    <ul className={styles.events}>
                      {space.events.map((event) => (
                        <li key={`${space.id}-${event.time}-${event.title}`}>
                          <time
                            className={styles.eventTime}
                            dateTime={`${day.isoDate}T${event.time}`}
                          >
                            {event.time}
                          </time>
                          <div className={styles.eventBody}>
                            <p className={styles.eventTitle}>{event.title}</p>
                            {event.description ? (
                              <p className={styles.eventDesc}>
                                {event.description}
                              </p>
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

        <details className={styles.day}>
          <summary className={styles.dayHeader}>
            <span className={styles.dayBadge}>
              <Film size={20} aria-hidden="true" />
            </span>
            <div className={styles.dayMeta}>
              <p className={styles.dayWeekday}>Всі дні</p>
              <h2 className={styles.dayTitle}>
                Арт-простір та сферичний кінотеатр
              </h2>
            </div>
            <ChevronDown className={styles.chevron} aria-hidden="true" />
          </summary>

          <div className={styles.shows}>
            {DOME_PROGRAM.map((show) => (
              <article key={show.id} className={styles.show}>
                <img
                  src={show.image}
                  alt={show.imageAlt}
                  className={styles.showImage}
                  loading="lazy"
                />
                <div className={styles.showBody}>
                  <h3 className={styles.showTitle}>{show.title}</h3>
                  <p className={styles.showDesc}>{show.description}</p>
                  <dl className={styles.showMeta}>
                    <div className={styles.showMetaItem}>
                      <dt>
                        <Star size={14} aria-hidden="true" />
                        <span className={styles.srOnly}>Рік випуску</span>
                      </dt>
                      <dd>{show.year}</dd>
                    </div>
                    <div className={styles.showMetaItem}>
                      <dt>
                        <Film size={14} aria-hidden="true" />
                        <span className={styles.srOnly}>Жанр</span>
                      </dt>
                      <dd>{show.genre}</dd>
                    </div>
                    <div className={styles.showMetaItem}>
                      <dt>
                        <Clock3 size={14} aria-hidden="true" />
                        <span className={styles.srOnly}>Тривалість</span>
                      </dt>
                      <dd>{show.duration}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
