import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Wheres The Ball?</h1>
        <p className={styles.subtitle}>
          Play the game. Guess the location. Win prizes.
        </p>
        <div className={styles.buttons}>
          <Button size="lg" className={styles.primaryButton}>Play Now</Button>
          <Button variant="outline" size="lg" className={styles.secondaryButton}>Learn More</Button>
        </div>
      </section>

      <section className={styles.cardGrid}>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Simply select the spot where you think the ball is hidden in the photo. Each correct answer earns you points and a chance to win weekly prizes.
            </p>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardHeader>
            <CardTitle>Why Play?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={styles.cardList}>
              <li>Free to play or enter paid competitions</li>
              <li>Exciting and fun gameplay</li>
              <li>Real prizes up for grabs</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className={styles.subscribeSection}>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle>Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <form className={styles.subscribeForm}>
              <Input placeholder="Your email address" className={styles.input} />
              <Button type="submit" className={styles.primaryButton}>Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
